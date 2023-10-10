import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type initialState = {
  [key: string]: string[];
};

type DailyTask = {
  day: string;
  values: {
    task: string;
  };
  id: string;
};

const initialState: initialState = {
  Segunda: [],
  Terça: [],
  Quarta: [],
  Quinta: [],
  Sexta: [],
};

const addDatyToWeek = (state: string[], dailyTask: DailyTask) => {
  const hasTask = state.find((task: any) => task?.id === dailyTask.id);

  if (hasTask) {
    return (state = state.map((task: any) =>
      task.id === dailyTask.id ? { ...task, dailyTask } : task
    ));
  }

  return [...state, dailyTask];
};

const Week = createSlice({
  name: 'week',
  initialState: initialState,
  reducers: {
    addWeek: (
      state,
      action: PayloadAction<{
        day: string;
        values: { task: string };
        id: string;
      }>
    ) => {
      const { day } = action.payload;
      return void (state[day] = addDatyToWeek(state[day], action.payload));
    },
  },
});

export const { addWeek } = Week.actions;
export const WeekReducer = Week.reducer;
