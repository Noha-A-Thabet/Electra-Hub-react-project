import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
        // toast method
        toast.info(
          `increased ${state.cartItems[itemIndex].name} Cart Quantity`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        // toast message
        toast.success(`add ${action.payload.name} to cart`, {
          position: "bottom-left",
        });
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
      if (action.payload && action.payload.name) {
        // toast message
        toast.error(`${action.payload.name} removed from cart`, {
          position: "bottom-left",
        });
      }
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

    // get Total items
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItems) => {
          const { price, cartQuantity } = cartItems;
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
      state.cartTotalQunatity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, removeItem, decreaseCartItems, getTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
