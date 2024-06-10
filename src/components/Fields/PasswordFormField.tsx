import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form.tsx'
import { PasswordInput } from '@/components/ui/password-input.tsx'

export const PasswordFormField = ({ control, name, label }) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<PasswordInput autoComplete="on" {...field} />
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}