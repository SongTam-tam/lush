import { configureStore } from "@reduxjs/toolkit";
import bestReducer from "./modules/BestSlice";
import valueReducer from "./modules/ValueSlice";
<<<<<<< HEAD
=======
import authReducer from "./modules/authSlice";
>>>>>>> dd1d993 (“추가”)

const store = configureStore({
  reducer: {
    best: bestReducer,
    value: valueReducer,
<<<<<<< HEAD
=======
    auth: authReducer,
>>>>>>> dd1d993 (“추가”)
  },
});

export default store;
