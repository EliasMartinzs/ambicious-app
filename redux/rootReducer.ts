import { combineReducers } from '@reduxjs/toolkit';
import { TaskReducer } from './slices/task/task.slice';
import { WeekReducer } from './slices/weeks/weeks.slice';

export const rootReducer = combineReducers({
  task: TaskReducer,
  week: WeekReducer,
});
