import axios from 'axios'
import { getJsonContentType } from '@/features/api/api.helper.ts'
import { IAuthResponse, IEmailPassword } from '@/features/auth/data/types.ts'
import { removeTokensStorage, saveToStorage } from '@/features/auth/data/auth.helper.ts'
import { defaultInstance } from '@/features/api/api.default-interceptor.ts'

class AuthService {
	async login(data: IEmailPassword) {
		const response = await axios.post<IEmailPassword, { data: IAuthResponse }>(
			import.meta.env.VITE_API_SERVER_URL + 'auth/login',
			data,
			{
				headers: getJsonContentType()
			}
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	}

	async getNewTokens(refreshToken: string | undefined) {
		if (!refreshToken) removeTokensStorage()

		const response = await axios.post<string, { data: IAuthResponse }>(
			import.meta.env.VITE_API_SERVER_URL + 'auth/login/access-token',
			{
				refreshToken
			},
			{
				headers: getJsonContentType()
			}
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	}

	async getMe() {
		const response = await defaultInstance.get<string, { data: any }>(
			'auth/get-me',
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	}
}

export default new AuthService()
