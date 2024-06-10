import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as UserReducer } from './user'

const rootReducer = combineReducers({
	UserReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: false
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
