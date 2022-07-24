import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rollsCount: 0
}

export const rollsCountSlice = createSlice({
    name: "rollsCount",
    initialState,
    reducers: {
        addRoll: state => {state.rollsCount++},
        resetRollsCount: state => {state.rollsCount = 0}
}});

export const { addRoll, resetRollsCount } = rollsCountSlice.actions;

export default rollsCountSlice.reducer;