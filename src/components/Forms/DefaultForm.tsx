import { Form } from '@/components/ui/form.tsx'
import { cn } from '@/utils/utils.ts'

export const DefaultForm = ({ children, form, onSubmit, className = '' }) => {
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn('flex flex-col space-y-6', className)}
			>
				{children}
			</form>
		</Form>
	)
}
