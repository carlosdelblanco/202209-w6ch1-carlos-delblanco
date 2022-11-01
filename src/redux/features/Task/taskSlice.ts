import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tasks from "./types";

export interface TaskState {
  tasks: Tasks[];
}

export const taskInitialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState: taskInitialState,
  reducers: {
    loadTasks: (
      currentTaskState,
      action: PayloadAction<Tasks[]>
    ): TaskState => ({
      ...currentTaskState,
      tasks: [...action.payload],
    }),

    addTask: (currentTaskState, action: PayloadAction<Tasks[]>): TaskState => ({
      ...currentTaskState,
      tasks: [...action.payload],
    }),
    removeTask: (
      currentTaskState,
      action: PayloadAction<number>
    ): TaskState => ({
      ...currentTaskState,
      tasks: currentTaskState.tasks.filter(
        (task) => task.id !== action.payload
      ),
    }),
  },
});

export const taskReducer = taskSlice.reducer;

export const {
  loadTasks: loadTasksActionCreator,
  addTask: addTaskActionCreator,
  removeTask: removeTaskActionCreator,
} = taskSlice.actions;
