import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodo = createAsyncThunk("getTodo", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return await res.data;
});
