import { Link } from 'react-router-dom'
import { logoNoBackground } from '@/assets'
import { buttonVariants } from '@/components/ui/button.tsx'
import { NavbarLink } from '@/layouts/Header/NavbarLink.tsx'

export const DesktopHeader = () => {
	return <header className='container bg-white py-[22px] lg:flex hidden items-center justify-between'>
		<Link to='/'><img src={logoNoBackground} alt='Логотип' className='h-[28px]' /></Link>
		<div className='flex gap-[30px] items-center'>
			<NavbarLink href='/' title="Главная"/>
			<NavbarLink href='/bots' title="Боты"/>
			<Link to='/lk' className={buttonVariants({ variant: 'nav' })}>Личный кабинет</Link>
		</div>


	</header>
}