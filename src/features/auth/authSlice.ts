import { createSlice } from "@reduxjs/toolkit";
import { ActivatePayload, RegisterPayload, RegisterResponse } from "./types";

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    register(state, action: { payload: RegisterPayload }) {},
    registerSuccess(state, action: { payload: RegisterResponse }) {},
    registerFailure(state, action: { payload: string }) {
      console.error("RegisterFailure", action.payload);
    },
    activate(state, action: { payload: ActivatePayload }) {},
    activateSuccess() {},
    activateFailure() {},
  },
});

export const { register, registerSuccess, registerFailure, activate, activateSuccess,activateFailure } = authSlice.actions;
export default authSlice.reducer;
