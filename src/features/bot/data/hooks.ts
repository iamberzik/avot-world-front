import { useQuery } from '@tanstack/react-query'
import BotService from './service.ts'
import { AxiosError } from 'axios'
import { DateRange } from 'react-day-picker'

export const useGetBotCatalog = () => {
	return useQuery<any, AxiosError>(
		{
			queryKey: ['bot list public'],
			queryFn: () => BotService.getBotCatalog(),
			initialData: () => []
		}
	)
}

export const useGetOwnedBots = () => {
	return useQuery<any, AxiosError>(
		{
			queryKey: ['owned bots'],
			queryFn: () => BotService.getOwnedBots(),
			initialData: () => []
		}
	)
}

export const useGetBotById = (id: number | string | null) => {
	return useQuery<any, AxiosError>({
		queryKey: ['bot', id],
		queryFn: () => BotService.getById(id!),
		enabled: !!id,
	})
}

export const useGetBotStatByIdAndQuery = (id: number | string | null, dates: DateRange) => {
	return useQuery<any, AxiosError>({
		queryKey: ['bot stat', id],
		queryFn: () => BotService.getBotStatByIdAndQuery(id!, dates),
		enabled: !!id
	})
}