import { configureStore } from '@reduxjs/toolkit';
import gameOnReducer from './gameOnSlice';
import diceReducer from './diceSlice';
import timeReducer from './timeSlice';
import rollsCountReducer from './rollsCountSlice';
import tableOpenReducer from './tableOpenSlice';

const store = configureStore({
  reducer: {
    gameOn: gameOnReducer,
    dice: diceReducer,
    time: timeReducer,
    rollsCount: rollsCountReducer,
    tableOpen: tableOpenReducer,
  },
});

export default store;
