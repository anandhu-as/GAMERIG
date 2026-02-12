import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type Game, type GameStateType } from "../../../types/types";
const initialState: GameStateType = {
  games: [],
};

export const fetchGames = createAsyncThunk<Game[]>(
  "games/fetchGames",
  async () => {
    const response = await fetch(
      "https://corsproxy.io/?https://www.freetogame.com/api/games",
    );
    const data = await response.json();
    return data;
  },
);

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.games = action.payload;
    });
  },
});

export default gameSlice.reducer;
