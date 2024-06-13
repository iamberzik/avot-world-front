import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useGetOwnedBots } from '@/features/bot/data/hooks.ts'
import { useEffect, useState } from 'react'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select.tsx'


export const MobileUserSidebar = () => {
	const { botId } = useParams()
	const location = useLocation()
	const navigate = useNavigate()
	const bots = useGetOwnedBots()

	const [botLinks, setBotLinks] = useState([])


	const handleChange = (newLink: string) => {
		navigate(newLink)
	}

	useEffect(() => {
		if (bots.data) {
			const links = bots.data.map((b) => ({
				title: b.title,
				href: `/lk/bots/${b.telegramId}`
			}))

			setBotLinks(links)
		}
	}, [bots.data])

	return <div className='px-[22px] my-[22px] lg:hidden'>
		<Select onValueChange={handleChange} defaultValue={!!botId ? `/lk/bots/${botId}` : location.pathname}>
			<SelectTrigger>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='/lk'>Профиль</SelectItem>
				<SelectGroup>
					<SelectLabel>Боты</SelectLabel>
					{
						botLinks.map((b, i) => <SelectItem value={b.href} key={i}>{b.title}</SelectItem>)
					}
				</SelectGroup>
			</SelectContent>
		</Select>
	</div>


}