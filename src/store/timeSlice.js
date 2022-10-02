import { createSlice } from '@reduxjs/toolkit';

export const timeSlice = createSlice({
  name: 'time',
  initialState: 0,
  reducers: {
    addTenMs: (state) => state + 10,
    resetStopwatch: () => 0,
  },
});

export const { addTenMs, resetStopwatch } = timeSlice.actions;

export const selectTime = (state) => state.time;

export default timeSlice.reducer;
