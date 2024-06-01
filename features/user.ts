import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserAccessPayload } from "./types";

interface State {
  payload: UserAccessPayload;
  fetched: boolean;
  authenticated: boolean;
  loading: boolean;
}

const initialState: State = {
  payload: {
    sub: "",
    email: "",
    userName: "",
    joinedAt: 0,
  },
  fetched: false,
  authenticated: false,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    enableFetch(state) {
      state.fetched = false;
    },
    disableFetch(state) {
      state.fetched = true;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    login(state, action: PayloadAction<UserAccessPayload>) {
      state.payload = action.payload;
      state.authenticated = true;
    },
    logout(state) {
      state.payload = {
        sub: "",
        email: "",
        userName: "",
        joinedAt: 0,
      };
      state.fetched = false;
      state.authenticated = false;
    },
  },
});

export const userSliceActions = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
