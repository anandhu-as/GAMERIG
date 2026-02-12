import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type Game, type GameStateType } from "../../../types/types";
import { BASE_URL } from "../../../constants/constants";
const initialState: GameStateType = {
  games: [],
};

export const fetchGames = createAsyncThunk<Game[]>(
  "games/fetchGames",
  async () => {
    const response = await fetch(BASE_URL);
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
