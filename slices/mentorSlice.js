import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const fetchMentors = createAsyncThunk(
  "mentors/fetchMentors",
  async (categoryid) => {
    const response = await fetch(
      `https://localhost:7059/api/mentors/${categoryid}`
    );
    return response.json();
  }
);

export const resetMentors = createAction("mentors/resetMentors");

const mentorsSlice = createSlice({
  name: "mentors",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMentors.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMentors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMentors.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
    builder.addCase(resetMentors, (state, action) => {
      state.data = null;
    });
  },
});

export default mentorsSlice.reducer;
