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

export const BotPageLazy = lazy(
	() => import('@/features/bot/pages/BotPage')
)
