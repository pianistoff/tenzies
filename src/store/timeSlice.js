import { createSlice } from '@reduxjs/toolkit';

export const timeSlice = createSlice({
    name: 'time',
    initialState: 0,
    reducers: {
        addTenMs: (state) => {
            return state += 10;
        },
        resetStopwatch: () => {
            return 0;
        },
    },
});

export const { addTenMs, resetStopwatch } = timeSlice.actions;

export const selectTime = (state) => state.time;

export default timeSlice.reducer;
