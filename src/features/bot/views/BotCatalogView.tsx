import { useGetBotCatalog } from '@/features/bot/data/hooks.ts'
import { BotCatalogCard } from '@/features/bot/components/BotCatalogCard.tsx'

export const BotCatalogView = () => {
	const bots = useGetBotCatalog()

	return <div className='container py-[40px] grid grid-cols-bot-cards gap-[30px]'>
		{
			!!bots.data && bots.data.length > 0
				? bots.data.map((bot, index) => <BotCatalogCard bot={bot} key={index} />)
				: <>Здесь пока ничего нет</>
		}
	</div>
}