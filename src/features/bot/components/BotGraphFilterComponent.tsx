import { cn } from '@/utils/utils.ts'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Calendar as CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar.tsx'
import { Badge } from '@/components/ui/badge.tsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export const BotGraphFilterComponent = ({
																					dates,
																					setDates,
																					title,
																					change,
																					filtersArray,
																					filter,
																					setFilter,
																					badge,
																					mode,
																					setMode
																				}) => {
	return <div className='flex flex-col sm:flex-row justify-between items-center mb-6 gap-3 px-[12px] sm:px-0'>
		<div className='w-full sm:flex items-center gap-2 sm:w-auto space-y-4 sm:space-y-0 sm:order-2'>
			{
				filtersArray.length > 0 && <Select onValueChange={setFilter} defaultValue={filter}>
					<SelectTrigger className='w-full sm:w-auto'>
						<SelectValue placeholder='Шаблон' />
					</SelectTrigger>
					<SelectContent>

						<SelectItem value='Все'>Все</SelectItem>
						{
							filtersArray.map((item, index) => <SelectItem value={item.value} key={index}>{item.label}</SelectItem>)
						}
					</SelectContent>
				</Select>
			}
			<Select defaultValue={mode} onValueChange={setMode}>
				<SelectTrigger className='w-full sm:w-auto'>
					<SelectValue placeholder='График' />
				</SelectTrigger>
				<SelectContent>

					<SelectItem value='value'>Всего</SelectItem>
					<SelectItem value='change'>Изменения</SelectItem>

				</SelectContent>
			</Select>
			<div className={cn('grid gap-2 w-full sm:w-auto')}>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							id='date'
							variant={'outline'}
							className={cn(
								'w-full justify-center',
								!dates && 'text-muted-foreground'
							)}
						>
							<CalendarIcon className='mr-2 h-4 w-4' />
							{dates?.from ? (
								dates.to ? (
									<>
										{format(dates.from, 'dd.MM.yyyy')} -{' '}
										{format(dates.to, 'dd.MM.yyyy')}
									</>
								) : (
									format(dates.from, 'dd.MM.yyyy')
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
							defaultMonth={dates?.from}
							selected={dates}
							onSelect={setDates}
							numberOfMonths={1}
						/>
					</PopoverContent>
				</Popover>
			</div>
		</div>
		<div className='flex items-center gap-2 order-2 sm:order-1'>
			<p className='text-lg font-bold'>{title}</p>
			<Badge variant={badge}>+{change}</Badge>
		</div>


	</div>
}