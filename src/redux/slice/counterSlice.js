import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  //extraReducers
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { increment, decrement, setCount } = counterSlice.actions;
export default counterSlice.reducer;
