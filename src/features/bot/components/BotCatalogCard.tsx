import { Link } from 'react-router-dom'
import { MoveRightIcon, UsersIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator.tsx'
import { buttonVariants } from '@/components/ui/button.tsx'

export const BotCatalogCard = ({ bot }) => {
	return <div className='shadow-card p-3 rounded-md'>
		<div className='flex gap-3 relative items-center'>
			<img src={bot.avatar} className='rounded-full h-[60px] border-2 border-secondary'
					 alt={`Аватарка бота ${bot.title}`} />
			<p className='text-[18px] font-[700]'>{bot.title}</p>
			{bot.isActive &&
				<div className='absolute top-0 right-0 animate-pulse w-[15px] h-[15px] bg-green-pulse rounded-full' />}
		</div>
		<Separator className='my-3' />
		<div className='flex items-center justify-between'>
			<p className='flex gap-3 font-[600]'><UsersIcon /> {bot._count.botUsers}</p>
			<Link target='_blank' to={`https://t.me/${bot.telegram}`}
						className={`${buttonVariants({ variant: 'card', size: 'sm' })} flex gap-2`}>Перейти <MoveRightIcon className="w-[16px]" /></Link>
		</div>

	</div>
}