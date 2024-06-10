import { Link, useLocation } from 'react-router-dom'

export const BotSidebarItem = ({ bot }) => {
	const location = useLocation()
	const botLink = `/lk/bots/${bot.telegramId}`

	const activeLink = location.pathname == botLink

	return <Link to={botLink}
		className={`flex items-center gap-3 text-[15px] font-[600] hover:text-secondary duration-300 ${activeLink ? 'text-secondary' : 'text-gray-utils'}`}>
		<img src={bot.avatar} alt={`Аватар бота ${bot.title}`} className='rounded-full h-[40px] object-center border-2 border-secondary' />
		<p className="text-ellipsis overflow-hidden">{bot.title}</p>


	</Link>
}