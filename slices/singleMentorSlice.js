import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";

export const fetchmentor = createAsyncThunk("fetchmentor", async (mentorId) => {
  const response = await fetch(`https://localhost:7059/api/mentor/${mentorId}`);
  return response.json();
});

export const resetMentors = createAction("mentors/resetMentors");

const mentorSlice = createSlice({
  name: "mentor",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchmentor.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchmentor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchmentor.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default mentorSlice.reducer;
