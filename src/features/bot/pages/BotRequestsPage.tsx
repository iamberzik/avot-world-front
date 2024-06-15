import { BotGraphView } from '@/features/bot/views/BotGraphView.tsx'
import { useGetBotRequestsStat } from '@/features/bot/data/hooks.ts'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'

const BotRequestsPage = () => {
	const [dates, setDates] = useState<DateRange | undefined>({
		from: addDays(new Date(), -7),
		to: new Date()
	})

	const { botId } = useParams()
	const graphData = useGetBotRequestsStat(botId!, dates)

	useEffect(() => {
		if (!dates?.from || !dates.to) {
			return
		}

		graphData.refetch()
	}, [dates])

	if (!graphData.data) return <></>

	return <BotGraphView
		graphData={graphData.data}
		setDates={setDates}
		dates={dates}
		title='Запросы'
		color='#7a66fb'
		badge="secondary"/>
}

export default BotRequestsPage