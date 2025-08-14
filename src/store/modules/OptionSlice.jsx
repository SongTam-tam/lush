import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    option: [
        { label: '1명', value: '1' },
        { label: '2명', value: '2' },
        { label: '3명', value: '3' },
        { label: '4명', value: '4' },
        { label: '5명', value: '5' },
    ],
    times: [
        { label: '01:00', value: '1' },
        { label: '02:00', value: '2' },
        { label: '03:00', value: '3' },
        { label: '04:00', value: '4' },
        { label: '05:00', value: '5' },
    ],
};

export const optionSlice = createSlice({
    name: 'option',
    initialState,
    reducers: {},
});

export const optionActions = optionSlice.actions;
export default optionSlice.reducer;
