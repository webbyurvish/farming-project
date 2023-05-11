import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentUser: null };

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const chatActions = chatSlice.actions;

export default chatSlice.reducer;
