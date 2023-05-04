import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "@/config";

export const fetchMessages = createAsyncThunk(
  "chat/fetchMessages",
  async ({ currentUser, otherUser }) => {
    const response = await axios.get(
      `${API_URL}/api/chat/${currentUser}/${otherUser}`
    );
    return response.data;
  }
);

export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async ({ senderId, receiverId, content }) => {
    await axios.post(`${API_URL}/api/chat`, {
      senderId,
      receiverId,
      content,
    });
  }
);

export const mentorChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(sendMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default mentorChatSlice.reducer;
