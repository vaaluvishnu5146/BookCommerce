import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    subTotal: 0,
    total: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
    quantityChange: (state, action) => {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }

          return {
            ...item,
            quantity: action.payload.value,
          };
        }),
      };
    },
    updateSubTotal: (state, action) => {
      return {
        ...state,
        subTotal: action.payload,
      };
    },
    updateTotal: (state, action) => {
      return {
        ...state,
        total: action.payload,
      };
    },
  },
});

export const { addItemToCart, quantityChange, updateSubTotal, updateTotal } =
  CartSlice.actions;
export default CartSlice.reducer;
