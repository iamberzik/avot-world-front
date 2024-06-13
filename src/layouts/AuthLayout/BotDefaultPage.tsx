import { PageMeta } from '@/layouts/PageMeta'
import { Outlet, useParams } from 'react-router-dom'
import { useGetBotById } from '@/features/bot/data/hooks.ts'
import { BotPageHeader } from '@/features/bot/components/BotPageHeader.tsx'
import { AuthLayoutNavigationMobile } from '@/layouts/AuthLayout/AuthLayoutNavigation/AuthLayoutNavigationMobile.tsx'
import { AuthLayoutNavigationDesktop } from '@/layouts/AuthLayout/AuthLayoutNavigation/AuthLayoutNavigationDesktop.tsx'

const BotDefaultPage = () => {
	const { botId } = useParams()
	const bot = useGetBotById(botId!)

	if (!bot.data) return <></>

	return <div className='grid grid-rows-[auto_min-content] lg:grid-rows-[min-content_min-content_auto] lg:gap-[40px] lg:h-[95%]'>
		<PageMeta pageTitle={bot.data.title} />
		<BotPageHeader bot={bot.data} />
		{
			bot.data.type === 'AVATAR' && <AuthLayoutNavigationDesktop bot={bot.data} />
		}

		<Outlet />

		{
			bot.data.type === 'AVATAR' && <AuthLayoutNavigationMobile botId={botId} />
		}

	</div>
}

export default BotDefaultPage