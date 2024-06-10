import { useTypedSelector } from '@/hooks/useActions.ts'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export const ProfileSidebarItem = () => {
	const { firstName, lastName, email } = useTypedSelector(state => state.UserReducer)

	return <Link to='/lk' className='flex items-center gap-3 rounded-full duration-300 hover:text-secondary'>
		<Avatar>
			<AvatarFallback
				className='bg-secondary/20 font-[500] h-[40px]'>{lastName?.length > 0 && firstName?.length > 0 ? `${lastName[0]}${firstName[0]}` : 'AW'}</AvatarFallback>
		</Avatar>

		<div>
			<p className='text-[14px] font-[600]'>{lastName} {firstName}</p>
			<p className='text-[12px]'>{email}</p>
		</div>

	</Link>
}