import GameReducer from "../features/games/gameSlice"
import CartReducer from "../features/cart/cartSlice"
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    games:GameReducer,
    cart:CartReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;