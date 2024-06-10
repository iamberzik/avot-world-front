import { PageMeta } from '@/layouts/PageMeta'
import { HeadBlock } from '@/features/home/components/HeadBlock.tsx'

const HomePage = () => {
	return <>
		<PageMeta pageTitle='Главная' />
		<HeadBlock />
	</>
}

export default HomePage