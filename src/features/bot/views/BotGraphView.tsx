import { useParams } from 'react-router-dom'
import { useGetBotStatByIdAndQuery } from '@/features/bot/data/hooks.ts'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useEffect, useState } from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import { addDays, format } from 'date-fns'
import { Button } from '@/components/ui/button.tsx'
import { Calendar } from '@/components/ui/calendar.tsx'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover.tsx'
import moment from 'moment'
import { cn } from '@/utils/utils.ts'
import { DateRange } from 'react-day-picker'

const CustomTooltip = ({ active, payload, label, type }) => {
	if (active) {
		return (
			<div className='bg-white rounded-xl border-2 p-[5px]'>
				<p className='font-[600]'>{label}</p>
				{
					type === 'AVATAR' ? <>
						<p className='text-green-pulse'>Запросов: {payload[0].value}</p>
						<p className='text-gray-utils'>Пользователей: {payload[1].value} </p>
					</> : <p className='text-gray-utils'>Пользователей: {payload[0].value} </p>
				}
			</div>
		)
	}

	return null
}

export const BotGraphView = ({ botType }) => {
	const { botId } = useParams()

	const [date, setDate] = useState<DateRange | undefined>({
		from: addDays(new Date(), -14),
		to: new Date()
	})


	const graphData = useGetBotStatByIdAndQuery(botId!, date)
	const [graphState, setGraphState] = useState([])

	useEffect(() => {
		if (!graphData.data) {
			return
		}

		const fixedData = []


		Object.keys(graphData.data).map((key) => fixedData.push({
			date: moment(key).format('DD.MM.YYYY'),
			requests: botType === 'AVATAR' ? graphData.data[key].requests : 0,
			users: graphData.data[key].users
		}))

		setGraphState(fixedData)

	}, [graphData.data])

	useEffect(() => {
		graphData.refetch()
	}, [date])

	if (!graphData.data) return <></>

	return <div className='lg:border-[1px] p-[22px] rounded-xl'>
		<div className='flex justify-center sm:justify-end mb-6'>
			<div className={cn('grid gap-2')}>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							id='date'
							variant={'outline'}
							className={cn(
								'w-[300px] justify-start text-left font-normal',
								!date && 'text-muted-foreground'
							)}
						>
							<CalendarIcon className='mr-2 h-4 w-4' />
							{date?.from ? (
								date.to ? (
									<>
										{format(date.from, 'LLL dd, y')} -{' '}
										{format(date.to, 'LLL dd, y')}
									</>
								) : (
									format(date.from, 'LLL dd, y')
								)
							) : (
								<span>Pick a date</span>
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent className='w-auto p-0' align='start'>
						<Calendar
							initialFocus
							mode='range'
							defaultMonth={date?.from}
							selected={date}
							onSelect={setDate}
							numberOfMonths={2}
						/>
					</PopoverContent>
				</Popover>
			</div>
		</div>
		<ResponsiveContainer width={'100%'} height={'85%'} minHeight={'300px'}>
			<LineChart data={graphState} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

				{
					botType === 'AVATAR' && <Line type='monotone' dataKey='requests' stroke='#6bb431' />
				}
				<Line type='monotone' dataKey='users' stroke='#484848' />
				<XAxis dataKey='date' color='#484848' />
				<YAxis color='#484848' />
				<Tooltip content={<CustomTooltip type={botType} />} />
			</LineChart>
		</ResponsiveContainer>


	</div>
}