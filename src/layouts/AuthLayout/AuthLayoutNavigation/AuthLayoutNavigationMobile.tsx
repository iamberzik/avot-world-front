import { Link, useLocation } from 'react-router-dom'
import { AtomIcon, FocusIcon, LayoutTemplateIcon, UsersIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator.tsx'

export const AuthLayoutNavigationMobile = ({ botId }) => {
	const location = useLocation()

	return <div className='lg:hidden'>
		<Separator />
		<div className='flex items-center justify-between px-[10%] py-[10px]'>
			<Link to={`/lk/bots/${botId}`}
						className={`flex flex-col gap-1 items-center font-semibold ${location.pathname === `/lk/bots/${botId}` && 'text-accent'}`}>
				<UsersIcon />
				<p className='text-[10px]'>Пользователи</p>
			</Link>
			<Link to={`/lk/bots/${botId}/requests`}
						className={`flex flex-col gap-1 items-center font-semibold ${location.pathname === `/lk/bots/${botId}/requests` && 'text-secondary'}`}>
				<AtomIcon />
				<p className='text-[10px]'>Запросы</p>
			</Link>
			<Link to={`/lk/bots/${botId}/templates`}
						className={`flex flex-col gap-1 items-center font-semibold ${location.pathname === `/lk/bots/${botId}/templates` && 'text-adjust'}`}>
				<LayoutTemplateIcon />
				<p className='text-[10px]'>Шаблоны</p>
			</Link>
			<Link to={`/lk/bots/${botId}/statuses`}
						className={`flex flex-col gap-1 items-center font-semibold ${location.pathname === `/lk/bots/${botId}/statuses` && 'text-adjust-dark'}`}>
				<FocusIcon />
				<p className='text-[10px]'>Роли</p>
			</Link>
		</div>

	</div>
}
