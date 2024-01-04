import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../features/todoSlice";

export const store = configureStore({
  reducer: reducer,
});

