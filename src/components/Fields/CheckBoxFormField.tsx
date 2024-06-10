import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form.tsx'
import { Checkbox } from '@/components/ui/checkbox.tsx'

export const CheckBoxFormField = ({ control, name, label }) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex items-center gap-3 space-y-0">
					<FormControl>
						<Checkbox checked={field.value} onCheckedChange={field.onChange} />
					</FormControl>
					<FormLabel className="mt-0">{label}</FormLabel>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
