import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // getting items from localStorage
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalAmount: 0,
  cartTotalQunatity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add items
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      // set items to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // remove items
    removeItem(state, action) {
      const nextItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = nextItem;
      // set New items to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // decrease Quantity
    decreaseCartItems(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextItem;
        // set New items to local storage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});

export const { addToCart, removeItem, decreaseCartItems } = cartSlice.actions;
export default cartSlice.reducer;
