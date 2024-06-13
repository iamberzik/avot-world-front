import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/utils.ts'
import { LayoutTemplateIcon } from 'lucide-react'

export const BotHeaderTemplatesNavLink = ({ bot }) => {
	const location = useLocation()
	const link = `/lk/bots/${bot.telegramId}/templates`
	const isActive = (link === `/lk/bots/${bot.telegramId}` && location.pathname === link) || (link !== `/lk/bots/${bot.telegramId}` && location.pathname === link)

	return <Link to={link}
							 className={cn(`flex items-center  min-w-[160px] gap-3 rounded-xl px-[20px] py-[10px]`, isActive ? `text-white bg-adjust` : `text-black bg-adjust/20`)}>
		<LayoutTemplateIcon
			className={`w-[35px] h-[35px] ${isActive ? 'text-white' : `text-adjust`}`} />
		<div>
			<p className='text-xl font-bold'>{bot._count.botTemplates}</p>
			<p className={`text-sm ${isActive ? 'text-white' : 'text-gray-utils'}`}>Шаблоны</p>
		</div>
	</Link>
}