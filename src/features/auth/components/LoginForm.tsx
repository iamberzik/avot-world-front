import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from '@/features/auth/data/hooks.ts'
import { useActions } from '@/hooks/useActions.ts'
import { errorCatch } from '@/features/api/api.helper.ts'
import { Button } from '@/components/ui/button.tsx'
import { rememberRefreshToken } from '@/features/auth/data/auth.helper.ts'
import { loginSchema } from '@/features/auth/data/shemas.ts'
import { PasswordFormField } from '@/components/Fields/PasswordFormField.tsx'
import { InputFormField } from '@/components/Fields/InputFormField.tsx'
import { DefaultForm } from '@/components/Forms/DefaultForm.tsx'
import toast from 'react-hot-toast'

export const LoginForm = () => {
	const loginMutator = useLogin()
	const { setUser } = useActions()

	const form = useForm<z.infer<typeof loginSchema>>({
		mode: 'onSubmit',
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
		await loginMutator.mutateAsync(values, {
			onSuccess: (response) => {
				setUser(response.user)
				rememberRefreshToken(response.refreshToken)
				window.location.replace('/lk')
			},
			onError: (error) => toast.error(errorCatch(error)),
		})
	}

	return (
		<DefaultForm form={form} onSubmit={onSubmit}>
			<InputFormField control={form.control} name="email" label="Email" />
			<PasswordFormField
				control={form.control}
				name="password"
				label="Пароль"
			/>
			<Button type="submit" variant="nav">Войти</Button>
		</DefaultForm>
	)
}
