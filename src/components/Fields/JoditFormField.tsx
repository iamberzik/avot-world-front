import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form.tsx'
import JoditEditor from 'jodit-react'
import { editorConfig } from '@/types/editor/editorConfig.ts'

export const JoditFormField = ({ control, name, label }) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<JoditEditor
							config={editorConfig}
							ref={field.ref}
							value={field.value}
							onBlur={(newContent) => field.onChange(newContent)}
							onChange={() => {}}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}