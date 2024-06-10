import { useGetMe } from '@/features/auth/data/hooks.ts'
import { PageMeta } from '@/layouts/PageMeta'
import { ProfileForm } from '@/features/profile/components/ProfileForm.tsx'

const ProfilePage = () => {
	const user = useGetMe()


	return <div className="lg:grid grid-cols-[1fr] grid-rows-[min-content_auto] gap-[40px] h-[95%]">
		<PageMeta pageTitle='Профиль' />
		<div className="hidden lg:block text-white rounded-xl bg-accent/10 leading-[40px] py-[10px] px-[22px] font-[600] text-[18px] pageHeader">Профиль</div>
		<div className="lg:border-[1px] p-[22px] rounded-xl">
			{!!user.data && <ProfileForm profile={user.data.user} />}
		</div>


	</div>
}

export default ProfilePage