import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/utils.ts'
import { UsersIcon } from 'lucide-react'

export const BotHeaderUsersNavLink = ({ bot }) => {
	const location = useLocation()
	const link = `/lk/bots/${bot.telegramId}`
	const isActive = (link === `/lk/bots/${bot.telegramId}` && location.pathname === link) || (link !== `/lk/bots/${bot.telegramId}` && location.pathname === link)

	return <Link to={link}
							 className={cn(`flex items-center  min-w-[160px] gap-3 rounded-xl px-[20px] py-[10px]`, isActive ? `text-white bg-accent` : `text-black bg-accent/20`)}>
		<UsersIcon
			className={`w-[35px] h-[35px] ${isActive ? 'text-white' : `text-accent`}`} />
		<div>
			<p className='text-xl font-bold'>{bot._count.botUsers}</p>
			<p className={`text-sm ${isActive ? 'text-white' : 'text-gray-utils'}`}>Пользователи</p>
		</div>
	</Link>
}