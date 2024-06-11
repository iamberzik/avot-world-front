import { PageMeta } from '@/layouts/PageMeta'
import { useParams } from 'react-router-dom'
import { useGetBotById } from '@/features/bot/data/hooks.ts'
import { BotPageHeader } from '@/features/bot/components/BotPageHeader.tsx'
import { BotGraphView } from '@/features/bot/views/BotGraphView.tsx'

const BotPage = () => {
	const { botId } = useParams()
	const bot = useGetBotById(botId!)

	if (!bot.data) return <></>

	return <div className='lg:grid grid-cols-[1fr] grid-rows-[min-content_auto] gap-[40px] h-[95%]'>
		<PageMeta pageTitle={bot.data.title} />
		<BotPageHeader bot={bot.data} />
		<BotGraphView botType={bot.data.type} />

	</div>
}

export default BotPage