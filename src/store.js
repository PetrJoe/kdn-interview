import { configureStore } from '@reduxjs/toolkit'
import carouselReducer from './features/carouselSlice'
import modalReducer from './features/modalSlice'

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    modal: modalReducer,
  }
})
