import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { taskReducer } from "../redux/features/Task/taskSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
