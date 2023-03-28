// import { rootReducer } from './reducer';
import { tasksReducer, filtersReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filtersReducer,
  },
});
