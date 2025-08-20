import { createSlice } from "@reduxjs/toolkit";
import bestData from "../../assets/api/shopBestData";
const initialState = {
  best: bestData,
};

export const bestSlice = createSlice({
  name: "best",
  initialState,
  reducers: {},
});

export const bestActions = bestSlice.actions;
export default bestSlice.reducer;
