import { createSlice, nanoid } from '@reduxjs/toolkit';

export const tableDataSlice = createSlice({
  name: 'tableData',
  initialState: { record: [], temporary: [] },
  reducers: {
    saveGameData: (state, action) => {
      let newState;
      if (state.record.length < 2) {
        newState = {
          ...state,
          record: [...state.record, { key: nanoid(), ...action.payload }],
        };
      } else {
        for (let i = 0; i < state.record.length; i += 1) {
          const otherIndex = 1 - i;
          if (state.record[i].time > action.payload.time) {
            newState = {
              temporary: [...state.temporary, state.record[i]],
              record: [
                state.record[otherIndex],
                { key: nanoid(), ...action.payload },
              ],
            };
          } else if (state.record[i].rollsCount > action.payload.rollsCount) {
            newState = {
              temporary: [...state.temporary, state.record[i]],
              record: [
                state.record[otherIndex],
                { key: nanoid(), ...action.payload },
              ],
            };
          } else {
            newState = {
              ...state,
              temporary: [
                ...state.temporary,
                { key: nanoid(), ...action.payload },
              ],
            };
          }
        }
      }
      return newState;
    },
  },
});

export const { saveGameData } = tableDataSlice.actions;

export const selectTableData = (state) => state.tableData;

export default tableDataSlice.reducer;
