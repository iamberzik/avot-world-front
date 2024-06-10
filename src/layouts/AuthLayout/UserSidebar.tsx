import { MobileUserSidebar } from '@/layouts/AuthLayout/MobileUserSidebar.tsx'
import { DesktopUserSidebar } from '@/layouts/AuthLayout/DesktopUserSidebar.tsx'

export const UserSidebar = () => {
	return <aside>
		<MobileUserSidebar />
		<DesktopUserSidebar />
	</aside>
}