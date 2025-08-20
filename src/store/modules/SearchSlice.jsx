import { createSlice } from '@reduxjs/toolkit';
import shopData from '../../assets/api/shopData';

const initialState = {
    search: shopData,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        onSearch: (state, action) => {
            state.search = state.search.filter((item) => item.title !== action.payload);
        },
    },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
