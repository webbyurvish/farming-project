import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const response = await fetch("https://localhost:7059/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to log in.");
    }
    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token:
      typeof localStorage !== "undefined"
        ? localStorage.getItem("token")
        : null,
    user:
      typeof localStorage !== "undefined" ? localStorage.getItem("user") : null,
    isLoading: false,
    isError: false,
    error: null,
    isLoggedIn:
      typeof localStorage !== "undefined"
        ? localStorage.getItem("isLoggedIn") === "true"
        : false,
  },
  reducers: {
    setUser: (state, action) => {
      // state.user = action.payload;
      localStorage.setItem("user", action.payload, { expires: 7 });
    },
    setToken: (state, action) => {
      // state.token = action.payload;
      localStorage.setItem("token", action.payload, { expires: 7 });
    },
    logout: (state) => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("token", action.payload.token, { expires: 7 });
        localStorage.setItem("user", JSON.stringify(action.payload.user), {
          expires: 7,
        });
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isLoggedIn = false;
        state.error = action.error.message;
      });
  },
});

export const { setUser, setToken, logout } = authSlice.actions;

export default authSlice.reducer;
