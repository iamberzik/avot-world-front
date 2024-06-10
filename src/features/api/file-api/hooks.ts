import FileService from './service.ts'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

export const useLibraryUpload = () => {
	return useMutation({
		mutationFn: (data: File) => FileService.library(data),
	})
}

export const useMultiUpload = () => {
	return useMutation({
		mutationFn: (data: Array<File>) => FileService.uploadMulti(data),
	})
}

export const useStaticUpload = () => {
	return useMutation({
		mutationFn: (data: File) => FileService.static(data),
	})
}

export const useUpload = () => {
	return useMutation({ mutationFn: (data: File) => FileService.upload(data) })
}

export const useFileUploadMutation = () => {
	const [progress, setProgress] = useState(0)

	const mutation = useMutation({
		mutationFn: async (data: File) =>
			FileService.uploadWithProgress(data, setProgress),
	})

	return { ...mutation, progress }
}
