import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksReducerSlice';
import sortReducer from './sortReducerSlice';
import filterReducer from './filterRedicerSlice';

const rootReducer = combineReducers({
   tasks: tasksReducer,
   sorted: sortReducer,
   filter: filterReducer,
});

export const store = configureStore({
   reducer: rootReducer,
});
