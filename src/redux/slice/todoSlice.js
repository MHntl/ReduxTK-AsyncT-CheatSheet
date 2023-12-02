import { createSlice } from "@reduxjs/toolkit";
import { getTodo } from "../asyncThunk/userAction";

const initialState = {
  todos: [],
  isLoading: true,
  isError: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    });
    builder.addCase(getTodo.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
