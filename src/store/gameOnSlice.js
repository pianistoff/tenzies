import { createSlice } from '@reduxjs/toolkit';

export const gameOnSlice = createSlice({
  name: 'gameOn',
  initialState: false,
  reducers: {
    startGame: () => true,
    endGame: () => false,
  },
});

export const { startGame, endGame } = gameOnSlice.actions;

export const selectGameOn = (state) => state.gameOn;

export default gameOnSlice.reducer;
