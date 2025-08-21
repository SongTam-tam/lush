import { createSlice } from '@reduxjs/toolkit';
import shopData from '../../assets/api/shopData';

const initialState = {
    search: shopData,
    searchdata: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        onSearch: (state, action) => {
            state.search = shopData.filter(
                (item) =>
                    item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                    item.category.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        searchText: (state, action) => {
            state.searchdata = action.payload;
        },
    },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
