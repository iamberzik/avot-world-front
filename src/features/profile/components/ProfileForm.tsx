import { useForm } from 'react-hook-form'
import { InputFormField } from '@/components/Fields/InputFormField.tsx'
import { DefaultForm } from '@/components/Forms/DefaultForm.tsx'

export const ProfileForm = ({ profile }) => {


	const form = useForm<any>({
		mode: 'onBlur',
		defaultValues: profile
	})

	return (
		<DefaultForm form={form} onSubmit={undefined} className='grid grid-cols-bot-cards gap-[30px] space-y-0 lg:space-y-2'>
			<InputFormField control={form.control} name='email' label='Email' disabled={true} />
			<InputFormField control={form.control} name='telegram' label='Телеграм' disabled={true} />
			<InputFormField control={form.control} name='firstName' label='Имя' disabled={true} />
			<InputFormField control={form.control} name='lastName' label='Фамилия' disabled={true} />
			<InputFormField control={form.control} name='patronymic' label='Отчество' disabled={true} />
		</DefaultForm>
	)
}