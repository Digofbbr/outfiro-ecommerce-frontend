import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from '../slice/FavoriteSlice'

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer
  },
})