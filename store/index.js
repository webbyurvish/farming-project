import { configureStore } from "@reduxjs/toolkit";
import farmerSlice from "../slices/farmerSlice";
import mentorsSlice from "@/slices/mentorSlice";
import categorySlice from "@/slices/categorySlice";
import authReducer from "@/slices/authSlice";
import singleMentorSlice from "@/slices/singleMentorSlice";
import chatSlice from "@/slices/chatSlice";
import mentorChatSlice from "@/slices/mentorChatSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["mentor", "category", "singlementor", "chat", "mentorchat"], // add the slices you want to persist here
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    farmer: farmerSlice,
    mentor: mentorsSlice,
    category: categorySlice,
    auth: authReducer,
    singlementor: singleMentorSlice,
    chat: chatSlice,
    mentorChat: mentorChatSlice,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
