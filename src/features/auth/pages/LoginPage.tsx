import { PageMeta } from '@/layouts/PageMeta'
import { LoginForm } from '@/features/auth/components/LoginForm.tsx'

const LoginPage = () => {
	return <>
		<PageMeta pageTitle='Вход в личный кабинет' />
		<section className='container flex justify-center items-center'>
			<div className='min-w-[250px] border-2 p-[20px] rounded-xl'>
				<h2 className='text-[28px] text-center font-[600] mb-2'>Вход</h2>
				<LoginForm />
			</div>

		</section>
	</>
}

export default LoginPage