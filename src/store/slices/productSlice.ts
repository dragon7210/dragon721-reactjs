import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ProductsState = any[];

const initialState: ProductsState = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (
      state: ProductsState,
      action: PayloadAction<any[]>
    ): ProductsState => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
