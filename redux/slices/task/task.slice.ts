import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  task: string[];
};

const initialState: InitialState = {
  task: [],
};

const newTask = (task: any, taskToAdd: any) => {
  return (task = taskToAdd);
};

export const Task = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    addTask: (state, actions) => {
      return void (state.task = newTask(state.task, actions.payload));
    },
  },
});

export const { addTask } = Task.actions;

export const TaskReducer = Task.reducer;
