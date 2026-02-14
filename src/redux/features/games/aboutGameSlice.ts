import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AboutGameState, Game } from "../../../types/types";
const initialState: AboutGameState = {
  selectedGame: null,
};
const aboutGameSlice = createSlice({
  name: "aboutGame",
  initialState,
  reducers: {
    setGameDetail: (state, action: PayloadAction<Game>) => {
      state.selectedGame = action.payload;
    },
  },
});
export default aboutGameSlice.reducer;
export const { setGameDetail } = aboutGameSlice.actions;
