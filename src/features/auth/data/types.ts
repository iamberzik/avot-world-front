export enum TokenType {
	accessToken = 'accessToken',
	refreshToken = 'refreshToken',
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse extends ITokens {
	user: any
}

export interface IEmailPassword {
	email: string
	password: string
}

export enum UserRole {
	ADMIN = 'ADMIN',
}

export const UserRoleLocale = {
	ADMIN: 'Администратор',
}
