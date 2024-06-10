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

	return <div className="lg:container lg:flex lg:mt-[20px] lg:gap-[60px]">
		<UserSidebar />
		<div className="flex-grow">
			<Outlet />
		</div>

	</div>
}

export default AuthLayout

