import { configureStore, Action } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
import rootReducer  from './RootReducer'
import { RootState } from './RootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export default store

