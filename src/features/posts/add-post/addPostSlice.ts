import { createSlice } from "@reduxjs/toolkit";
import { CardProps } from "../../../types/posts";
import { AddPostPayload } from "./types";
const addPostSlice = createSlice({
  name: "addPost",
  initialState: {} as {post?:CardProps},
  reducers: {
	addPost(state, action: { payload: AddPostPayload }) {},
   addPostSuccess(state, action: { payload: CardProps }) {
		state.post = action.payload
	 },
	 addPostFailure(state, action: { payload: string }) {},
  },
});

export const { actions } = addPostSlice;
export default addPostSlice.reducer;