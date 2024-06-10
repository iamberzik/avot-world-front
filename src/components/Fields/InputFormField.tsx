import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form.tsx'
import { Input } from '@/components/ui/input.tsx'

export const InputFormField = ({
	control,
	name,
	label,
	disabled = false,
	type = 'text',
	min = 0,
	max = 0,
	step = 1,
	value = null,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						{type === 'number' ? (
							<Input
								type="number"
								min={min}
								max={max || 9999999999999999}
								step={step}
								disabled={disabled}
								{...{ ...field, value: value ? value : field.value }}
							/>
						) : (
							<Input
								disabled={disabled}
								{...{ ...field, value: value ? value : field.value }}
							/>
						)}
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
