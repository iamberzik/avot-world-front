import { useEffect, useState } from 'react'
import moment from 'moment'
import { BotGraphComponent } from '@/features/bot/components/BotGraphComponent.tsx'
import { BotCalendarComponent } from '@/features/bot/components/BotCalendarComponent.tsx'


export const BotGraphView = ({
															 graphData,
															 dates,
															 setDates,
															 title,
															 color,
	badge,
															 filtersArray = [],
															 filter = '',
															 setFilter = () => {
															 }
														 }) => {
	const [graphState, setGraphState] = useState([])
	const [changeSumState, setChangeSumState] = useState(0)

	useEffect(() => {
		const fixedData = []
		let changeSum = 0

		Object.keys(graphData).map((key) => {
			fixedData.push({
				date: moment(key).format('DD.MM.YYYY'),
				value: graphData[key].value,
				change: graphData[key].change
			})
			changeSum += graphData[key].change
		})

		setGraphState(fixedData)
		setChangeSumState(changeSum)

	}, [graphData])

	return <div className='lg:border-[1px] box-border p-[10px] lg:p-[22px] rounded-xl'>
		<BotCalendarComponent dates={dates} title={title} setDates={setDates} change={changeSumState}
													filtersArray={filtersArray} filter={filter} setFilter={setFilter} badge={badge} />
		<div className='w-full h-[65%] md:h-[80%]'>
			<BotGraphComponent title={title} graphState={graphState} color={color} />
		</div>


	</div>
}