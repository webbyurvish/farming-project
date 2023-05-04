import { configureStore } from "@reduxjs/toolkit";
import farmerSlice from "../slices/farmerSlice";
import mentorsSlice from "@/slices/mentorSlice";
import categorySlice from "@/slices/categorySlice";
import authReducer from "@/slices/authSlice";
import singleMentorSlice from "@/slices/singleMentorSlice";
import chatSlice from "@/slices/chatSlice";

const store = configureStore({
  reducer: {
    farmer: farmerSlice,
    mentor: mentorsSlice,
    category: categorySlice,
    auth: authReducer,
    singlementor: singleMentorSlice,
    chat: chatSlice,
  },
});

export default store;
