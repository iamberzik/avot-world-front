import { BotHeaderUsersNavLink } from '@/features/bot/components/BotHeaderNavLinks/BotHeaderUsersNavLink.tsx'
import { BotHeaderRequestsNavLink } from '@/features/bot/components/BotHeaderNavLinks/BotHeaderRequestsNavLink.tsx'
import { BotHeaderTemplatesNavLink } from '@/features/bot/components/BotHeaderNavLinks/BotHeaderTemplatesNavLink.tsx'
import { BotHeaderStatusesNavLink } from '@/features/bot/components/BotHeaderNavLinks/BotHeaderStatusesNavLink.tsx'

export const AuthLayoutNavigationDesktop = ({ bot }) => {


	return <div className='hidden lg:block'>
		<div className='flex items-center gap-[40px]'>
			<BotHeaderUsersNavLink bot={bot}/>
			<BotHeaderRequestsNavLink bot={bot}/>
			<BotHeaderTemplatesNavLink bot={bot}/>
			<BotHeaderStatusesNavLink bot={bot}/>
		</div>

	</div>
}
