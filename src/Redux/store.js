import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Reducers/Cart";

export default configureStore({
  // Root_reducer
  reducer: {
    Cart: Cart,
  },
});
