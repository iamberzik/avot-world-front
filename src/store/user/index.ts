import { createSlice, original } from '@reduxjs/toolkit'
import { forgetRefreshToken, removeTokensStorage } from '@/features/auth/data/auth.helper.ts'
import { UserLocalStorageKey } from '@/types/globals.ts'

const initialState: any = {}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			if (original(state) === action.payload || action.payload === undefined) {
				return state
			}

			localStorage.setItem(UserLocalStorageKey, JSON.stringify(action.payload))
			return action.payload
		},
		
		logout(state) {
			window.location.replace('/login')
			removeTokensStorage()
			forgetRefreshToken()
			return initialState
		}
	}
})

export const { actions, reducer } = userSlice
