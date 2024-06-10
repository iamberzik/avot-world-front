import { defaultInstance } from '@/features/api/api.default-interceptor.ts'
import { DateRange } from 'react-day-picker'

class BotService {
	private URL = 'bot'

	async getBotCatalog() {
		const response = await defaultInstance.get<any>(`${this.URL}/public`)
		return response.data
	}

	async getOwnedBots() {
		const response = await defaultInstance.get<any>(`${this.URL}/owned`)
		return response.data
	}

	async getById(id: number | string) {
		const response = await defaultInstance.get<any>(
			`${this.URL}/${id}`
		)
		return response.data
	}

	async getBotStatByIdAndQuery(id: number | string, dates: DateRange) {
		const response = await defaultInstance.post<any>(
			`${this.URL}/${id}/stat/`,
			dates
		)
		return response.data
	}
}

export default new BotService()