import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./features/cartWork/cartSlice"

export const store = configureStore({
  reducer: {
    cart:cartSlice
  },
})