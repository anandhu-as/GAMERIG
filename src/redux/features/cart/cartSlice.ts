import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { cartItem, CartState } from "../../../types/types";

const initialState: CartState = {
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

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    decrementCartCount: (state, action: PayloadAction<number>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload,
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;

export const { incrementCartCount, decrementCartCount, removeFromCart } =
  cartSlice.actions;
