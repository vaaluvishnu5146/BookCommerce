import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    subTotal: 0,
    total: 0,
  },
  reducers: {
    saveAllProducts: (state, action) => {
      return { ...state, items: action.payload };
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
    // quantityChange: (state, action) => {
    //   console.log(state.items);
    //   const itemsCopy = [...state.items];
    //   const matchingItem = itemsCopy.find(
    //     (data) => data.id == action.payload.id
    //   );
    //   matchingItem.quantity = action.payload.value;
    //   return { ...state, items: itemsCopy };
    // },
  },
});

export const { saveAllProducts, quantityChange, updateSubTotal, updateTotal } =
  CartSlice.actions;
export default CartSlice.reducer;
