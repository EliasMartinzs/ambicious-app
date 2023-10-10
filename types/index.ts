type TaskType = {
  id: number;
  task: string;
};

type WeeksPaylodType = {
  tasks: [dailyTask?: string, id?: string];
};

export type { WeeksPaylodType, TaskType };
