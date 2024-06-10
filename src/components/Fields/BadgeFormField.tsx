import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form.tsx'
import { CustomBadge } from '@/components/ui/custom-badge.tsx'

export const BadgeFormField = ({ control, name, label, texts, colors }) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<CustomBadge
							text={texts[field.value]}
							colors={colors[field.value]}
							form={true}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
