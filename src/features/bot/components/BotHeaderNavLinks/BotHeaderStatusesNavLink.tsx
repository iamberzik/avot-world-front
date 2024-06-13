import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/utils.ts'
import { FocusIcon } from 'lucide-react'

export const BotHeaderStatusesNavLink = ({ bot }) => {
	const location = useLocation()
	const link = `/lk/bots/${bot.telegramId}/statuses`
	const isActive = (link === `/lk/bots/${bot.telegramId}` && location.pathname === link) || (link !== `/lk/bots/${bot.telegramId}` && location.pathname === link)

	return <Link to={link}
							 className={cn(`flex items-center gap-3  min-w-[160px] rounded-xl px-[20px] py-[10px]`, isActive ? `text-white bg-adjust-dark` : `text-black bg-adjust-dark/20`)}>
		<FocusIcon
			className={`w-[35px] h-[35px] ${isActive ? 'text-white' : `text-adjust-dark`}`} />
		<div>
			<p className='text-xl font-bold'>{bot._count.statuses}</p>
			<p className={`text-sm ${isActive ? 'text-white' : 'text-gray-utils'}`}>Роли</p>
		</div>
	</Link>
}