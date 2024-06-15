import { useEffect, useState } from 'react'
import moment from 'moment'
import { BotGraphComponent } from '@/features/bot/components/BotGraphComponent.tsx'
import { BotGraphFilterComponent } from '@/features/bot/components/BotGraphFilterComponent.tsx'
import { BarChart3 } from 'lucide-react'


export const BotGraphView = ({
															 graphData,
															 dates,
															 setDates,
															 title,
															 color,
															 badge,
															 filtersArray = [],
															 filter = '',
															 setFilter = null
														 }) => {
	const [graphState, setGraphState] = useState([])
	const [changeSumState, setChangeSumState] = useState(0)
	const [mode, setMode] = useState('value')

	useEffect(() => {
		try {
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
		} catch (e) {
			setGraphState([])
			setChangeSumState(0)
		}
	}, [graphData])
	try {
		return <div className='lg:border-[1px] box-border p-[10px] lg:p-[22px] rounded-xl'>
			<BotGraphFilterComponent dates={dates} title={title} setDates={setDates} change={changeSumState}
															 filtersArray={filtersArray} filter={filter} setFilter={setFilter} badge={badge}
															 mode={mode} setMode={setMode} />
			<div className='w-full h-[50%] sm:h-[65a%] md:h-[80%]'>
				{
					graphState.length > 0 ?
						<BotGraphComponent title={title} graphState={graphState} color={color} mode={mode} />
						:
						<div className='h-full bg-gray-200 rounded-xl flex justify-center items-center'>
							<div className='text-gray-utils flex flex-col items-center gap-3 text-xl font-bold'>
								<BarChart3 className='w-[60px] h-[60px]' />
								<p>Нет данных</p>
							</div>
						</div>
				}

			</div>
		</div>
	} catch (e) {
		return <div className='lg:border-[1px] box-border p-[10px] lg:p-[22px] rounded-xl'>
			<BotGraphFilterComponent dates={dates} title={title} setDates={setDates} change={changeSumState}
															 filtersArray={filtersArray} filter={filter} setFilter={setFilter} badge={badge}
															 mode={mode} setMode={setMode} />
			<div className='w-full h-[50%] sm:h-[65a%] md:h-[80%] bg-gray-200 rounded-xl flex justify-center items-center'>
				<div className='text-gray-utils flex flex-col items-center gap-3 text-xl font-bold'>
					<BarChart3 className='w-[60px] h-[60px]' />
					<p>Нет данных</p>
				</div>
			</div>
		</div>
	}

}