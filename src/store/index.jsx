import { configureStore } from '@reduxjs/toolkit';
import bestReducer from './modules/BestSlice';
import valueReducer from './modules/ValueSlice';
import optionReducer from './modules/OptionSlice';
import authReducer from './modules/authSlice';
import searchReducer from './modules/SearchSlice';
import cartReducer from './modules/CartSlice';

const store = configureStore({
    reducer: {
        best: bestReducer,
        value: valueReducer,
        option: optionReducer,
        auth: authReducer,
        search: searchReducer,
        cart: cartReducer,
    },
});

export default store;
