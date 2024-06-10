import { AxiosProgressEvent } from 'axios'
import { multipartInstance } from '@/features/api/api.multipart-interceptor.ts'
import { IFileReturnDto } from '@/features/api/file-api/types.ts'

class FileService {
	async upload(data: File) {
		const formData = new FormData()

		formData.append('file', data)

		const response = await multipartInstance.post<IFileReturnDto>(
			`uploads`,
			formData
		)
		return response.data
	}

	async uploadWithProgress(data: File, setProgress: any) {
		const formData = new FormData()

		formData.append('file', data)

		const response = await multipartInstance.post<IFileReturnDto>(
			`uploads`,
			formData,
			{
				onUploadProgress: (ev: AxiosProgressEvent) =>
					setProgress(Math.round((ev.loaded * 100) / ev.total)),
			}
		)
		return response.data
	}

	async uploadMulti(data: Array<File>) {
		const response = await multipartInstance.post<IFileReturnDto>(
			`multi-uploads`,
			data
		)
		return response.data
	}

	async static(data: File) {
		const formData = new FormData()

		formData.append('file', data)

		const response = await multipartInstance.post<IFileReturnDto>(
			`static`,
			formData
		)
		return response.data
	}

	async library(data: File) {
		const formData = new FormData()

		formData.append('file', data)

		const response = await multipartInstance.post<IFileReturnDto>(
			`library`,
			data
		)
		return response.data
	}
}

export default new FileService()
