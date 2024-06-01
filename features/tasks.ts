import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskType, updateTaskPayload } from "./types";

interface State {
  list: TaskType[];
  loading: boolean;
}

const initialState: State = {
  list: [],
  loading: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updateTasks(state, action: PayloadAction<TaskType[]>) {
      state.list = action.payload;
    },
    createTask(state, action: PayloadAction<TaskType>) {
      state.list.push(action.payload);
    },
    updateTask(state, action: PayloadAction<updateTaskPayload>) {
      const { id, title, description } = action.payload;
      const task = state.list.find((task) => task._id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
    completeTask(state, action: PayloadAction<string>) {
      const task = state.list.find((task) => task._id === action.payload);
      if (task) {
        task.completed = true;
      }
    },
    uncompleteTask(state, action: PayloadAction<string>) {
      const task = state.list.find((task) => task._id === action.payload);
      if (task) {
        task.completed = false;
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.list = state.list.filter((task) => task._id !== action.payload);
    },
    deleteAllTasks(state) {
      state.list = [];
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const tasksSliceActions = tasksSlice.actions;
export const tasksSliceReducer = tasksSlice.reducer;
