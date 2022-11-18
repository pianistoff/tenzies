import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gameOnReducer from './gameOnSlice';
import diceReducer from './diceSlice';
import timeReducer from './timeSlice';
import rollsCountReducer from './rollsCountSlice';
import tableOpenReducer from './tableOpenSlice';
import tableDataReducer from './tableDataSlice';

const tableDataPersistConfig = {
  key: 'tableData',
  storage,
  whitelist: ['record'],
};

const store = configureStore({
  reducer: {
    gameOn: gameOnReducer,
    dice: diceReducer,
    time: timeReducer,
    rollsCount: rollsCountReducer,
    tableOpen: tableOpenReducer,
    tableData: persistReducer(tableDataPersistConfig, tableDataReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
