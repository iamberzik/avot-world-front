import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

export const PageMeta = ({ pageTitle }) => {
	const location = useLocation()

	return (
		<Helmet>
			<title>{pageTitle}</title>
			<meta name='description' content={pageTitle} />
			<link rel='apple-touch-icon' sizes='76x76' href='/apple-touch-icon.png' />
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicon-16x16.png'
			/>
			<link rel='manifest' href='/site.webmanifest' />
			<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
			<meta name='msapplication-TileColor' content='#da532c' />
			<meta name='theme-color' content='#ffffff' />
			<meta property='og:title' content={pageTitle} />
			<meta property='og:type' content={pageTitle} />
			<meta property='og:url' content={location.pathname} />
			<meta property='og:image' content='/favicon-32x32.png' />
		</Helmet>
	)
}
