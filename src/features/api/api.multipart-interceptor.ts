import axios from 'axios'
import { getAccessToken, removeTokensStorage } from '@/features/auth/data/auth.helper.ts'
import AuthService from '@/features/auth/data/service.ts'
import Cookies from 'js-cookie'
import { errorCatch, getMultipartContentType } from '@/features/api/api.helper.ts'

export const multipartInstance = axios.create({
	baseURL: import.meta.env.VITE_API_SERVER_URL + 'upload-file/',
	headers: getMultipartContentType(),
})

multipartInstance.interceptors.request.use((config) => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

multipartInstance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				const refreshToken = Cookies.get('refreshToken')
				await AuthService.getNewTokens(refreshToken)
				return multipartInstance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeTokensStorage()
				}
			}
		}

		throw error
	}
)
