import { createSlice } from "@reduxjs/toolkit";
import {
  ActivatePayload,
  LoginPayload,
  LoginResponse,
  RefreshResponse,
  RegisterPayload,
  RegisterResponse,
} from "./types";

const authSlice = createSlice({
  name: "auth",
  initialState: {} as { tokens?: LoginResponse },
  reducers: {
    register(state, action: { payload: RegisterPayload }) {
		console.log("registerSlice")
	 },
    registerSuccess(state, action: { payload: RegisterResponse }) {},
    registerFailure(state, action: { payload: string }) {
      console.error("RegisterFailure", action.payload);
    },
    activate(state, action: { payload: ActivatePayload }) {},
    activateSuccess() {},
    activateFailure() {},
    login(state, action: { payload: LoginPayload }) {},
    loginSuccess(state, action: { payload: LoginResponse }) {
      state.tokens = action.payload;
    },
    loginFailure(state, action: { payload: string }) {
      console.error("loginFailure", action.payload);
    },
    refresh() {},
    refreshSuccess(state, action: { payload: RefreshResponse }) {},
    refreshFailure(state, action: { payload: string }) {},
  },
});

export const {
actions,
} = authSlice;
export const authReducer =  authSlice.reducer;
