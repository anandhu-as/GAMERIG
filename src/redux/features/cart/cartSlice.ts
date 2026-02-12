import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { cartItem } from "../../../types/types";
const initialState: { cart: cartItem[] } = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCartCount: (state, action: PayloadAction<cartItem>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      existingItem
        ? (existingItem.quantity += 1)
        : state.cart.push({ ...action.payload, quantity: 1 });
    },
    decrementCartCount: (state, action: PayloadAction<cartItem>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity > 1
          ? (existingItem.quantity -= 1)
          : (state.cart = state.cart.filter(
              (item) => item.id !== action.payload.id,
            ));
      }
    },
  },
});
export default cartSlice.reducer;
export const { incrementCartCount ,decrementCartCount} = cartSlice.actions;
