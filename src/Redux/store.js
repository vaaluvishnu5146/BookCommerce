import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Reducers/Cart";
import Products from "./Reducers/Products";

export default configureStore({
  // Root_reducer
  reducer: {
    Cart: Cart,
    Products: Products,
  },
});
