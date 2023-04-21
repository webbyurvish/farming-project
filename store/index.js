import { configureStore } from "@reduxjs/toolkit";
import farmerSlice from "../slices/farmerSlice";

const store = configureStore({
  reducer: { farmer: farmerSlice.reducer },
});

export default store;
