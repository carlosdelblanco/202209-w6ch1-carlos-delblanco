import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import types from "./types";

export interface TaskState {
  tasks: types[];
}

const taskInitialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState: taskInitialState,
  reducers: {
    addTask: (currentTaskState, action: PayloadAction<types[]>): TaskState => ({
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
  addTask: addTaskActionCreator,
  removeTask: removeTaskActionCreator,
} = taskSlice.actions;
