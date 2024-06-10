import { z } from 'zod'

export const loginSchema = z.object({
	email: z
		.string()
		.email('Введите корректный Email')
		.transform((v) => v.toLowerCase()),
	password: z.string().min(1, { message: 'Введите пароль' }),
})
