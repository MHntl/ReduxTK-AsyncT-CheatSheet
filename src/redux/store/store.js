import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";
import todoSlice from "../slice/todoSlice";

export default configureStore({
  reducer: { counterSlice, todoSlice },
});
