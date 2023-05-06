import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "@/config";

const initialState = {
  isLoading: false,
  isEmailSent: false,
  errorMessage: null,
  successMessage: null,
  isPasswordReset: false,
};

export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    sendForgotPasswordRequestStart: (state) => {
      state.isLoading = true;
      state.isEmailSent = false;
      state.successMessage = null;
      state.errorMessage = null;
    },
    sendForgotPasswordRequestSuccess: (state, action) => {
      state.isLoading = false;
      state.isEmailSent = true;
      state.errorMessage = null;
      state.successMessage = "Email Sent Successfully";
    },
    sendForgotPasswordRequestFailure: (state, action) => {
      state.isLoading = false;
      state.isEmailSent = false;
      state.errorMessage = action.payload;
      state.successMessage = null;
    },
    resetIsEmailSent: (state) => {
      state.isEmailSent = false;
    },
    resetPasswordRequestStart: (state) => {
      state.isLoading = true;
      state.isPasswordReset = false;
      state.errorMessage = null;
    },
    resetPasswordRequestSuccess: (state) => {
      state.isLoading = false;
      state.isPasswordReset = true;
      state.errorMessage = null;
    },
    resetPasswordRequestFailure: (state, action) => {
      state.isLoading = false;
      state.isPasswordReset = false;
      state.errorMessage = action.payload;
    },
    resetPasswordReset: (state) => {
      state.isPasswordReset = false;
    },
  },
});

export const {
  sendForgotPasswordRequestStart,
  sendForgotPasswordRequestSuccess,
  sendForgotPasswordRequestFailure,
  resetIsEmailSent,
  resetPasswordReset,
  resetPasswordRequestFailure,
  resetPasswordRequestSuccess,
  resetPasswordRequestStart,
} = forgotPasswordSlice.actions;

export const sendForgotPasswordRequest = (email) => async (dispatch) => {
  dispatch(sendForgotPasswordRequestStart());

  console.log(email);

  await fetch(`${API_URL}/api/forgotpassword`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });
};

export const resetPassword =
  ({ email, token, password }) =>
  async (dispatch) => {
    dispatch(resetPasswordRequestStart());

    console.log(email, token, password);

    const response = await fetch(
      `${API_URL}/api/resetpassword?email=${email}&token=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(password),
      }
    );

    if (response.ok) {
      dispatch(resetPasswordRequestSuccess());
    } else {
      dispatch(resetPasswordRequestFailure());
    }
  };

export default forgotPasswordSlice.reducer;
