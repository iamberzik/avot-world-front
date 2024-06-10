import { DefaultPageTitle } from '@/layouts/DefaultPageTitle.tsx'
import { BotCatalogView } from '@/features/bot/views/BotCatalogView.tsx'

const BotCatalogPage = () => {
	return <section>
		<DefaultPageTitle pageTitle='Боты' />
		<BotCatalogView />
	</section>

}

export default BotCatalogPage