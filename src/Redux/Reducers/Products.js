import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "Products",
  initialState: {
    productItems: [],
  },
  reducers: {
    saveAllProducts: (state, action) => {
      return { ...state, productItems: action.payload };
    },
  },
});

export const { saveAllProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
