import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import favouriteReducer from "./favouriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    listItems: favouriteReducer,
  },
});
