import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useMemo, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage.ts'
import { getAccessToken } from '@/features/auth/data/auth.helper.ts'
import { checkRefreshToken } from '@/features/auth/utils/checkRefreshToken.ts'
import { UserLocalStorageKey } from '@/types/globals.ts'

type Context = {
	isAuth: boolean
	setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<Context>({} as Context)

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [userFromLS] = useLocalStorage(UserLocalStorageKey, null)
	const [isRefreshTokenChecked, setIsRefreshTokenChecked] =
		useState<boolean>(false)
	const [isAuth, setIsAuth] = useState<boolean>(
		!!userFromLS && !!getAccessToken()
	)

	const value = useMemo(
		() => ({
			isAuth,
			setIsAuth
		}),
		[isAuth, isRefreshTokenChecked]
	)

	useEffect(() => {
		checkRefreshToken().then(() => {
			setIsRefreshTokenChecked(true)
		})
	}, [])

	useEffect(() => {
		setIsAuth(!!userFromLS && !!getAccessToken())
	}, [window.location.pathname])

	useEffect(() => {
		if (isRefreshTokenChecked) {
			setIsAuth(!!userFromLS && !!getAccessToken())
		}
	}, [isRefreshTokenChecked])

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
