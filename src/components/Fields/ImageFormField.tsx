import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form.tsx'
import { Input } from '@/components/ui/input.tsx'
import { getImageData } from '@/utils/getImageData.ts'
import { ImagePreview } from '@/components/Forms/ImagePreview.tsx'
import { useState } from 'react'
import { Progress } from '@/components/ui/progress.tsx'

export const ImageFormField = ({
	control,
	name,
	label,
	previewDefault = '',
	progress = 0,
}) => {
	const [preview, setPreview] = useState(previewDefault)

	return (
		<>
			<FormField
				control={control}
				name={name}
				render={({ field: { onChange, value, ...rest } }) => (
					<FormItem>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<Input
								accept="image/*"
								type="file"
								{...rest}
								onChange={(event) => {
									const { files, displayUrl } = getImageData(event)
									setPreview(displayUrl)
									onChange(files)
								}}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<ImagePreview image={preview} />
			{progress > 0 && <Progress value={progress} />}
		</>
	)
}
