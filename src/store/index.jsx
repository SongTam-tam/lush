import { configureStore } from '@reduxjs/toolkit';
import bestReducer from './modules/BestSlice';
import valueReducer from './modules/ValueSlice';
import optionReducer from './modules/OptionSlice';

const store = configureStore({
    reducer: {
        best: bestReducer,
        value: valueReducer,
        option: optionReducer,
    },
});

export default store;
