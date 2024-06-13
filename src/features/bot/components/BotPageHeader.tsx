import { MoveRightIcon, UsersIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button.tsx'

export const BotPageHeader = ({ bot }) => {
	return <div
		className='hidden lg:flex items-center pageHeader justify-between rounded-xl bg-accent/10 leading-[40px] py-[10px] px-[22px]'>
		<div className='flex gap-3 relative items-center'>
			<img src={bot.avatar} className='rounded-full h-[60px] border-2 border-accent'
					 alt={`Аватарка бота ${bot.title}`} />
			<p className='text-[18px] font-[700] '>{bot.title}</p>
		</div>
		<Link target='_blank' to={`https://t.me/${bot.telegram}`}
					className={`${buttonVariants({
						variant: 'botPage',
						size: 'sm'
					})} flex gap-2`}>Перейти <MoveRightIcon
			className='w-[16px]' /></Link>
	</div>
}