import { lazy } from 'react'

export const HomePageLazy = lazy(
	() => import('@/features/home/pages/HomePage')
)

export const LoginPageLazy = lazy(
	() => import('@/features/auth/pages/LoginPage')
)

export const BotCatalogPageLazy = lazy(
	() => import('@/features/bot/pages/BotCatalogPage')
)

export const ProfilePageLazy = lazy(
	() => import('@/features/profile/pages/ProfilePage')
)

export const BotUsersPageLazy = lazy(
	() => import('@/features/bot/pages/BotUsersPage')
)

export const BotRequestsPageLazy = lazy(
	() => import('@/features/bot/pages/BotRequestsPage')
)

export const BotTemplatesPageLazy = lazy(
	() => import('@/features/bot/pages/BotTemplatesPage')
)

export const BotStatusesPageLazy = lazy(
	() => import('@/features/bot/pages/BotStatusesPage')
)