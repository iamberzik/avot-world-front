import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const CustomTooltip = ({ active, payload, label, title, mode }) => {
	if (active) {
		return (
			<div className='bg-white rounded-xl border-2 p-[5px]'>
				<p className='font-[600]'>{label}</p>
				{
					payload.length > 0 ? <>
						{
							mode === 'value' ? <>
									<p>{title}: {payload[0].value} (+{payload[1].value}) </p>
								</> :
								<>
									<p>{title}: {payload[1].value} (+{payload[0].value}) </p>
								</>
						}
					</> : <p>{title}</p>
				}

			</div>
		)
	}

	return null
}

export const BotGraphComponent = ({ graphState, title, color, mode }) => {

	return <ResponsiveContainer height={'100%'} width={'100%'}>

		<LineChart data={graphState} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
			{
				mode === 'value' ? <>
						<Line type='monotone' dataKey='value' strokeWidth={2} stroke={color} />
						<Line type='monotone' dataKey='change' strokeWidth={2} stroke='white' />
					</> :
					<>
						<Line type='monotone' dataKey='change' strokeWidth={2} stroke={color} />
						<Line type='monotone' dataKey='value' strokeWidth={2} stroke='white' />
					</>
			}
			<XAxis dataKey='date' color='#484848' />
			<YAxis color='#484848' type='number' dataKey={mode === 'value' ? 'value' : 'change'}
						 domain={['dataMin', 'auto']} />
			<Tooltip content={<CustomTooltip title={title} mode={mode} />} />
		</LineChart>
	</ResponsiveContainer>

}