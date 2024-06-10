export const handlePasswordConfirmation = (password: string, confirmPassword: string) => {
	if (confirmPassword.length === 0) return 'Поле обязательно к заполнению'
	return password === confirmPassword || 'Пароли должны совпадать'
}
