import { createSlice } from '@reduxjs/toolkit';

export const tableDataSlice = createSlice({
  name: 'scoreTableData',
  initialState: [],
  reducers: {
    saveNonRecordGameData: (state, action) => [...state, action.payload],
  },
});

export const { saveNonRecordGameData } = tableDataSlice.actions;

export const selectTableData = (state) => state.tableData;

export default tableDataSlice.reducer;
