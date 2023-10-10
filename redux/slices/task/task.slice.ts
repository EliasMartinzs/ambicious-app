import { TaskType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  allTask: TaskType[];
};

const initialState: InitialState = {
  allTask: [],
};

const newTask = (task: TaskType[], taskToAdd: TaskType) => {
  const hasTask = task.find(item => item.id === taskToAdd.id);

  if (hasTask) {
    return (task = task.map(item =>
      item.id === taskToAdd.id ? { ...item, taskToAdd } : item
    ));
  }

  return [...task, { ...taskToAdd }];
};

export const Task = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    addTask: (state, actions) => {
      return void (state.allTask = newTask(state.allTask, actions.payload));
    },
  },
});

export const { addTask } = Task.actions;

export const TaskReducer = Task.reducer;
