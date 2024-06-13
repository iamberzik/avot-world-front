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

export const useGetBotUsersStat = (id: number | string | null, data: any) => {
	return useQuery<any, AxiosError>({
		queryKey: ['bot stat users', id],
		queryFn: () => BotService.getBotUsersStat(id!, data),
		enabled: !!id
	})
}

export const useGetBotRequestsStat = (id: number | string | null, data: any) => {
	return useQuery<any, AxiosError>({
		queryKey: ['bot stat requests', id],
		queryFn: () => BotService.getBotRequestsStat(id!, data),
		enabled: !!id
	})
}

export const useGetBotTemplatesStat = (id: number | string | null, data: any) => {
	return useQuery<any, AxiosError>({
		queryKey: ['bot stat templates', id],
		queryFn: () => BotService.getBotTemplatesStat(id!, data),
		enabled: !!id
	})
}

export const useGetBotStatusesStat = (id: number | string | null, data: any) => {
	return useQuery<any, AxiosError>({
		queryKey: ['bot stat statuses', id],
		queryFn: () => BotService.getBotStatusesStat(id!, data),
		enabled: !!id
	})
}