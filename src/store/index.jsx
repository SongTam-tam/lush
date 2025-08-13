import { configureStore } from "@reduxjs/toolkit";
import bestReducer from "./modules/BestSlice";
import valueReducer from "./modules/ValueSlice";

const store = configureStore({
  reducer: {
    best: bestReducer,
    value: valueReducer,
  },
});

export default store;
