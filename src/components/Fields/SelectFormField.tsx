import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form.tsx'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select.tsx'

export const SelectFormField = ({
	control,
	name,
	label,
	placeholder,
	options,
	customOnChange = (value) => {},
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<Select
						onValueChange={(value) => {
							customOnChange(value)
							field.onChange(value)
						}}
						defaultValue={field.value.toString()}
					>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{options.map((c, index) => (
								<SelectItem value={c.value.toString()} key={index}>
									{c.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
