import { Link, useLocation } from 'react-router-dom'

export const NavbarLink = ({ href, title }) => {
	const location = useLocation()
	const activeLink =
		(href === '/' && location.pathname === href) ||
		(href !== '/' && location.pathname.includes(href))

	return <Link to={href}
							 className={`text-[15px] font-[600] hover:text-secondary duration-300 ${activeLink ? 'text-secondary' : 'text-gray-utils'}`}>{title}</Link>
}