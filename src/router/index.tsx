import { createBrowserRouter, Navigate } from 'react-router-dom'
import { BotCatalogPageLazy, BotPageLazy, HomePageLazy, LoginPageLazy, ProfilePageLazy } from '@/router/lazyPages.ts'
import MainLayout from '@/layouts/MainLayout.tsx'
import AuthLayout from '@/layouts/AuthLayout'

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <></>,
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <HomePageLazy />
			},
			{
				path: 'bots',
				element: <BotCatalogPageLazy />
			},
			{
				path: 'lk',
				children: [
					{
						path: 'login',
						element: <LoginPageLazy />
					},
					{
						path: '',
						element: <AuthLayout />,
						children: [
							{
								path: '',
								element: <ProfilePageLazy />
							},
							{
								path: 'bots',
								children: [
									{
										path: ':botId',
										element: <BotPageLazy />
									}
								]

							}
						]
					}
				]
			},
			{
				path: '*',
				element: <Navigate to={'/'} />
			}
		]
	}
])
