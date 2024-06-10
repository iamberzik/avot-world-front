import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form.tsx'
import { Input } from '@/components/ui/input.tsx'
import { getFileData } from '@/utils/getImageData.ts'
import { Progress } from '@/components/ui/progress.tsx'
import { useState } from 'react'

export const FileFormField = ({
	control,
	name,
	label,
	filter = '',
	defaultPreview = '',
	progress = 0,
}) => {
	const [preview, setPreview] = useState(defaultPreview)

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
								accept={filter}
								type="file"
								{...rest}
								onChange={(event) => {
									const { files, displayUrl } = getFileData(event)
									setPreview(displayUrl)
									onChange(files)
								}}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			{preview && (
				<p
					className={
						'flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-white placeholder:text-stone-500 ' +
						'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 cursor-not-allowed ' +
						'border-stone-200 bg-stone-200'
					}
				>
					<span className="max-w-[80%] text-ellipsis overflow-hidden text-nowrap">
						{preview}
					</span>
				</p>
			)}

			{progress > 0 && <Progress value={progress} />}
		</>
	)
}
