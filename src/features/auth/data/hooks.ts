import { useContext } from 'react'
import { AuthContext } from '@/providers/AuthProvider.tsx'
import { useMutation, useQuery } from '@tanstack/react-query'
import { IEmailPassword } from '@/features/auth/data/types.ts'
import AuthService from '@/features/auth/data/service.ts'

export const useAuth = () => useContext(AuthContext)

export const useLogin = () => {
	return useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IEmailPassword) => AuthService.login(data)
	})
}

export const useGetMe = () => {
	return useQuery({
		queryKey: ['get me'],
		queryFn: () => AuthService.getMe(),
	})
}