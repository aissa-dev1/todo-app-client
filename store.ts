import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./features/user";
import { tasksSliceReducer } from "./features/tasks";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    tasks: tasksSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
