import { createSlice } from "@reduxjs/toolkit";

const selectedPostSlice = createSlice({
  name: "selectedPost",
  initialState: { id: null } as { id: string | null | number },
  reducers: {
    setSelectedPost(state, action: { payload: string | number |null }) {
      state.id = action.payload;
    },
	 closeSelectedPost(state, action: { payload: string | number }) {
      state.id = action.payload;
  },
},});

export const { setSelectedPost, closeSelectedPost } = selectedPostSlice.actions;
export default selectedPostSlice.reducer;
