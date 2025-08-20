import { createSlice } from "@reduxjs/toolkit";
import ValueData from "../../assets/api/mainValueData";
const initialState = {
  value: ValueData,
};

export const valueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    xx: (state, action) => {},
  },
});

export const valueActions = valueSlice.actions;
export default valueSlice.reducer;
