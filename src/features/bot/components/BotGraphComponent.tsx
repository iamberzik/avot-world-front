import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const CustomTooltip = ({ active, payload, label, title }) => {
	if (active) {
		return (
			<div className='bg-white rounded-xl border-2 p-[5px]'>
				<p className='font-[600]'>{label}</p>
				<p>{title}: {payload[0].value} (+{payload[1].value}) </p>
			</div>
		)
	}

	return null
}

export const BotGraphComponent = ({ graphState, title, color }) => {
	return <ResponsiveContainer height={'100%'} width={"100%"}>
		<LineChart data={graphState} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>

			<Line type='monotone' dataKey='value' stroke={color} />
			<Line type='monotone' dataKey='change' stroke='white' />
			<XAxis dataKey='date' color='#484848' />
			<YAxis color='#484848' />
			<Tooltip content={<CustomTooltip title={title} />} />
		</LineChart>
	</ResponsiveContainer>

}