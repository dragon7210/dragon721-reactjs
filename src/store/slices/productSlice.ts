import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type ProductsState = any[]
type FavouritProState = any[]

const initialState: ProductsState = []

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (
      state: ProductsState,
      action: PayloadAction<any[]>,
    ): ProductsState => {
      return action.payload
    },
    addProduct: (
      state: ProductsState,
      action: PayloadAction<any>,
    ): ProductsState => {
      const newState = state.map((item) => item)
      newState.push(action.payload)
      return newState
    },
    addFavouritePro: (
      state: FavouritProState,
      action: PayloadAction<any>,
    ): FavouritProState => {
      return state.map((item) =>
        item._id === action.payload._id ? { ...item, favourited: true } : item,
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setProducts,
  addProduct,
  addFavouritePro,
} = productsSlice.actions

export default productsSlice.reducer
