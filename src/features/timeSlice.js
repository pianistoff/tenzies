import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    time: 0
}

export const timeSlice = createSlice({
    name: "time",
    initialState,
    reducers: {
        addTenMs: state => {state.time += 10},
        resetStopwatch: state => {state.time = 0}
}});

export const { addTenMs, resetStopwatch } = timeSlice.actions;

export const selectTime = state => state.time.time;

export default timeSlice.reducer;