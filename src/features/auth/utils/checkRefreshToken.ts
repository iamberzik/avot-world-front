import {
	forgetRefreshToken,
	getRefreshToken,
	rememberRefreshToken
} from '@/features/auth/data/auth.helper.ts'
import AuthService from '@/features/auth/data/service.ts'

export const checkRefreshToken = async () => {
	const refreshToken = getRefreshToken()

	if (!!refreshToken) {
		try {
			const response = await AuthService.getNewTokens(refreshToken)
			rememberRefreshToken(response.data.refreshToken)
		} catch (e) {
			forgetRefreshToken()
		}
	}
}
