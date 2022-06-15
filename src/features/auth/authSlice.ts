import { createSlice } from "@reduxjs/toolkit";
import { RegisterPayload, RegisterResponse } from "./types";

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    register(state, action: { payload: RegisterPayload }) {},
    registerSuccess(state, action: { payload: RegisterResponse }) {},
    registerFailure(state, action: { payload: string }) {
      console.error("RegisterFailure", action.payload);
    },
  },
});

export const { register, registerSuccess, registerFailure } = authSlice.actions;
export default authSlice.reducer;
