import { createSlice } from '@reduxjs/toolkit';

export const tableOpenSlice = createSlice({
    name: 'tableOpen',
    initialState: false,
    reducers: {
        openTable: () => {
            return true;
        },
        closeTable: () => {
            return false;
        },
    },
});

export const { openTable, closeTable } = tableOpenSlice.actions;

export const selectTableOpen = (state) => state.tableOpen;

export default tableOpenSlice.reducer;
