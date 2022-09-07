import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tableOpen: false
}

export const tableOpenSlice = createSlice({
    name: "tableOpen",
    initialState,
    reducers: {
        openTable: state => {state.tableOpen = true},
        closeTable: state => {state.tableOpen = false}
}});

export const { openTable, closeTable } = tableOpenSlice.actions;

export const selectTableOpen = state => state.tableOpen.tableOpen;

export default tableOpenSlice.reducer;