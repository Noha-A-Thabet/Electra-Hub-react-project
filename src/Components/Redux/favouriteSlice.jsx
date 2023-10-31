import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  // getting items from localStorage
  listItems: localStorage.getItem("listItems")
    ? JSON.parse(localStorage.getItem("listItems"))
    : [],
  listTotalAmount: 0,
  listTotalQunatity: 0,
};
export const favouriteSlice = createSlice({
  name: "favouriteSlice",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const itemIndex = state.listItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.listItems[itemIndex].listQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, listQuantity: 1 };
        state.listItems.push(tempProduct);
        // toast message
        toast.success(`add ${action.payload.name} to whishList`, {
          position: "bottom-left",
        });
      }
      // set items to local storage
      localStorage.setItem("listItems", JSON.stringify(state.listItems));
    },

    // remove items
    removeFromFav(state, action) {
      const nextItem = state.listItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.listItems = nextItem;
      // set New items to local storage
      localStorage.setItem("listItems", JSON.stringify(state.listItems));
      // toast message
      toast.error(`${action.payload.name} removed from wishList`, {
        position: "bottom-left",
      });
    },

    // get Total items
    getTotalLikes(state, action) {
      let { total, quantity } = state.listItems.reduce(
        (cartTotal, listItems) => {
          const { price, cartQuantity } = listItems;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.listTotalQunatity = quantity;
      state.listTotalAmount = total;
    },
  },
});

export const { addToFav, removeFromFav, getTotalLikes } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
