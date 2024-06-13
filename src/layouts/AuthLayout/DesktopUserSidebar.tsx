import { useGetOwnedBots } from '@/features/bot/data/hooks.ts'
import { BotSidebarItem } from '@/features/bot/components/BotSidebarItem.tsx'
import { ProfileSidebarItem } from '@/features/profile/components/ProfileSidebarItem.tsx'

export const DesktopUserSidebar = () => {
	const bots = useGetOwnedBots()

	return <div
		className='hidden lg:grid grid-cols-[1fr] grid-rows-[min-content_auto] border-[1px] rounded-xl p-[10px] h-[95%] w-[250px]'>
		<ProfileSidebarItem />
		<div>
			<p className='text-[18px] font-[600] mt-[40px] mb-[20px]'>Боты</p>
			<div className="flex flex-col gap-3">
				{
					!!bots.data && bots.data.map((b, i) => <BotSidebarItem bot={b} key={i} />)
				}
			</div>
		</div>
	</div>
}