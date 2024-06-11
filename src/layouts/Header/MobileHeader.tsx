import { Link, useNavigate } from 'react-router-dom'
import { favicon, logoNoBackground } from '@/assets'
import { buttonVariants } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge.tsx'

export const MobileHeader = () => {
	const navigate = useNavigate()
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	const navigateClick = (href: string) => {
		navigate(href)
		setIsModalOpen(false)
	}

	return <header className='container bg-white py-[22px] flex lg:hidden items-center justify-between'>
		<Link to='/' className="flex items-center gap-3"><img src={favicon} alt='Логотип' className='h-[28px]' /><Badge variant="header">Бета</Badge></Link>
		<HamburgerMenuIcon className='h-[28px] w-[28px] cursor-pointer' onClick={toggleModal}></HamburgerMenuIcon>
		<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
			<DialogContent>
				<nav className='grid grid-rows-1 gap-6'>
					<p onClick={() => navigateClick('/')} className='font-semibold cursor-pointer select-none'>Главная</p>
					<p onClick={() => navigateClick('/bots')} className='font-semibold cursor-pointer select-none'>Боты</p>
					<p onClick={() => navigateClick('/lk')}
						 className={`${buttonVariants({ variant: 'nav' })} cursor-pointer select-none`}>Личный кабинет</p>
				</nav>
			</DialogContent>
		</Dialog>

	</header>
}