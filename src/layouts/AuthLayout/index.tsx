import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@/features/auth/data/hooks.ts'
import { UserSidebar } from '@/layouts/AuthLayout/UserSidebar.tsx'
import { useEffect } from 'react'

const AuthLayout = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) {
			navigate('/lk/login')
		}
	}, [])

	return <div className='grid grid-rows-[min-content_auto] lg:grid-cols-[min-content_auto] lg:grid-rows-[1fr] lg:container lg:gap-[60px]'>
		<UserSidebar />
		<Outlet />
	</div>
}

export default AuthLayout

