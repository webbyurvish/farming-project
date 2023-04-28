import { createSlice } from "@reduxjs/toolkit";

const initialState = { isFarmer: true };

const farmerSlice = createSlice({
  name: "farmer",
  initialState,
  reducers: {
    setMentor(state) {
      state.isFarmer = false;
    },
    setFarmer(state) {
      state.isFarmer = true;
    },
  },
});

export const farmerActions = farmerSlice.actions;

export default farmerSlice.reducer;
