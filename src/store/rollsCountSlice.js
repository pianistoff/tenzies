import { createSlice } from '@reduxjs/toolkit';

export const rollsCountSlice = createSlice({
  name: 'rollsCount',
  initialState: 0,
  reducers: {
    addRoll: (state) => state + 1,
    resetRollsCount: () => 0,
  },
});

export const { addRoll, resetRollsCount } = rollsCountSlice.actions;

export const selectRollsCount = (state) => state.rollsCount;

export default rollsCountSlice.reducer;
