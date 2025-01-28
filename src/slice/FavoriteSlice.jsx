import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   favorites: []
}
  
export const favoriteSlice = createSlice({
name: 'favorite',
initialState,
reducers: {
    addToFavorite: (state, action) => {
        state.favorites.push(action.payload)
    },
    removeFromFavorite: (state, action) => {
        state.favorites = state.favorites.filter((item) => item !== action.payload)
    },
},
})

// Action creators are generated for each case reducer function
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer