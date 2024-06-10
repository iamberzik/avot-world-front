import { useEffect } from 'react'
import { useAuth } from '@/features/auth/data/hooks.ts'
import { useLocalStorage } from '@/hooks/useLocalStorage.ts'
import { UserLocalStorageKey } from '@/types/globals.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import './styles/globals.css'
import { useActions } from '@/hooks/useActions.ts'

function App() {
	const { setUser } = useActions()
	const { isAuth } = useAuth()
	const [userFromLS] = useLocalStorage(UserLocalStorageKey, null)

	useEffect(() => {
		if (isAuth) {
			try {
				setUser(userFromLS)
			} catch (e) {
			}
		}
	}, [isAuth, userFromLS])


	return <RouterProvider router={router} />
}

export default App
