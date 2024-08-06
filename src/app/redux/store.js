import { configureStore } from '@reduxjs/toolkit'
import wishReducer from "./features/wishlist/wishlistSlice"

export const store = configureStore({
  reducer: {
    wish:wishReducer
  },
})