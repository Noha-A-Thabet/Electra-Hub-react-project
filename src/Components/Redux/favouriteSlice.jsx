import { createSlice } from "@reduxjs/toolkit";

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
      }
      // set items to local storage
      localStorage.setItem("listItems", JSON.stringify(state.listItems));
    },
  },
});

export const { addToFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;
