import { BotGraphView } from '@/features/bot/views/BotGraphView.tsx'
import { useGetBotTemplatesStat } from '@/features/bot/data/hooks.ts'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'
import { prepareTitlesToSelect } from '@/utils/prepareDataToSelect.ts'

const BotTemplatesPage = () => {
	const [dates, setDates] = useState<DateRange | undefined>({
		from: addDays(new Date(), -14),
		to: new Date()
	})
	const [template, setTemplate] = useState('Все')

	const { botId } = useParams()
	const graphData = useGetBotTemplatesStat(botId!, { ...dates, template })

	useEffect(() => {
		if (!dates?.from || !dates.to) {
			return
		}

		graphData.refetch()
	}, [dates, template])

	if (!graphData.data) return <></>

	return <BotGraphView
		graphData={graphData.data.requests}
		setDates={setDates}
		dates={dates}
		title={`Шаблон (${template})`}
		filter={template}
		setFilter={setTemplate}
		filtersArray={prepareTitlesToSelect(graphData.data.templates)}
		color='#EF5B2A'
		badge="adjust"
	/>
}

export default BotTemplatesPage