import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actions as userActions } from '@/store/user'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'

export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useActions = () => {
	const dispatch = useTypedDispatch()

	return useMemo(
		() => bindActionCreators({ ...userActions }, dispatch),
		[dispatch]
	)
}
