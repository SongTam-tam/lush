<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import bestReducer from './modules/BestSlice';
import valueReducer from './modules/ValueSlice';
import authReducer from './modules/authSlice';

const store = configureStore({
    reducer: {
        best: bestReducer,
        value: valueReducer,
        auth: authReducer,
    },
=======
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
>>>>>>> 5f9e158d9aae61bbac892fe016fffd6a90d71ad7
});

export default store;
