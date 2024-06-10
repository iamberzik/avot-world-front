import { PageMeta } from '@/layouts/PageMeta'

export const DefaultPageTitle = ({ pageTitle }) => {
	return <>
		<PageMeta pageTitle={pageTitle} />
		<div className="bg-gray-title py-[15px]">
			<div className='container'>
				<h2 className="text-[26px] font-[400] text-gray-utils">{pageTitle}</h2>
			</div>
		</div>
	</>
}