import Cookies from 'js-cookie'
import { IAuthResponse, ITokens, TokenType } from '@/features/auth/data/types.ts'
import { RefreshTokenLocalStorageKey, UserLocalStorageKey } from '@/types/globals.ts'

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set(TokenType.accessToken, data.accessToken)
	Cookies.set(TokenType.refreshToken, data.refreshToken)
}

export const removeTokensStorage = () => {
	Cookies.remove(TokenType.accessToken)
	Cookies.remove(TokenType.refreshToken)
	localStorage.removeItem(UserLocalStorageKey)
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(TokenType.accessToken)
	return accessToken || null
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem(UserLocalStorageKey, JSON.stringify(data.user))
}

export const rememberRefreshToken = (refreshToken: string) => {
	localStorage.setItem(RefreshTokenLocalStorageKey, refreshToken)
}

export const forgetRefreshToken = () => {
	localStorage.removeItem(RefreshTokenLocalStorageKey)
}

export const getRefreshToken = () => {
	return localStorage.getItem(RefreshTokenLocalStorageKey)
}
