import { createBrowserRouter, Navigate } from 'react-router-dom'
import {
	BotCatalogPageLazy,
	BotRequestsPageLazy, BotStatusesPageLazy, BotTemplatesPageLazy,
	BotUsersPageLazy,
	HomePageLazy,
	LoginPageLazy,
	ProfilePageLazy
} from '@/router/lazyPages.ts'
import MainLayout from '@/layouts/MainLayout.tsx'
import AuthLayout from '@/layouts/AuthLayout'
import BotDefaultPage from '@/layouts/AuthLayout/BotDefaultPage.tsx'

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
								path: 'bots/:botId',
								element: <BotDefaultPage />,
								children: [
									{
										path: '',
										element: <BotUsersPageLazy />
									},
									{
										path: 'requests',
										element: <BotRequestsPageLazy />
									},
									{
										path: 'templates',
										element: <BotTemplatesPageLazy />
									},
									{
										path: 'statuses',
										element: <BotStatusesPageLazy />
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
