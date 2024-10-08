// Get Configure store from redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoSlice.reducer,
});
