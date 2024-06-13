import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/utils.ts'
import { AtomIcon } from 'lucide-react'

export const BotHeaderRequestsNavLink = ({ bot }) => {
	const location = useLocation()
	const link = `/lk/bots/${bot.telegramId}/requests`
	const isActive = (link === `/lk/bots/${bot.telegramId}` && location.pathname === link) || (link !== `/lk/bots/${bot.telegramId}` && location.pathname === link)

	return <Link to={link}
							 className={cn(`flex items-center min-w-[160px] gap-3 rounded-xl px-[20px] py-[10px]`, isActive ? `text-white bg-secondary` : `text-black bg-secondary/20`)}>
		<AtomIcon
			className={`w-[35px] h-[35px] ${isActive ? 'text-white' : `text-secondary`}`} />
		<div>
			<p className='text-xl font-bold'>{bot.requests}</p>
			<p className={`text-sm ${isActive ? 'text-white' : 'text-gray-utils'}`}>Запросы</p>
		</div>
	</Link>
}