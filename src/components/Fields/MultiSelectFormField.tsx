import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form.tsx'
import MultiSelect from '@/components/ui/multi-select.tsx'

export const MultiSelectFormField = ({
	control,
	name,
	label,
	options,
	placeholder,
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<MultiSelect
							options={options}
							onChange={field.onChange}
							selected={field.value}
							placeholder={placeholder}
						/>
					</FormControl>
				</FormItem>
			)}
		/>
	)
}