import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import gridReducer from '../features/grid/gridSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    grid: gridReducer,
  },
});
