import { BotGraphView } from '@/features/bot/views/BotGraphView.tsx'
import { useGetBotStatusesStat } from '@/features/bot/data/hooks.ts'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'
import { prepareRuTitlesToSelect } from '@/utils/prepareDataToSelect.ts'

const BotTemplatesPage = () => {
	const [dates, setDates] = useState<DateRange | undefined>({
		from: addDays(new Date(), -14),
		to: new Date()
	})
	const [status, setStatus] = useState('Все')

	const { botId } = useParams()
	const graphData = useGetBotStatusesStat(botId!, { ...dates, status })

	useEffect(() => {
		if (!dates?.from || !dates.to) {
			return
		}

		graphData.refetch()
	}, [dates, status])

	if (!graphData.data) return <></>

	return <BotGraphView
		graphData={graphData.data.requests}
		setDates={setDates}
		dates={dates}
		title={`Роли (${status})`}
		filter={status}
		setFilter={setStatus}
		filtersArray={prepareRuTitlesToSelect(graphData.data.statuses)}
		color="#8d47a9"
		badge="adjustDark"
	/>
}

export default BotTemplatesPage