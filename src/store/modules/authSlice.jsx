import { createSlice } from '@reduxjs/toolkit';

const memberData = [
    {
        id: 1,
        userid: 'abc',
        password: 'lush123',
        passwordConfirm: 'lush123',
        name: '홍길동',
        phoneNum1: '1234',
        phoneNum2: '5678',
        email: 'abc@naver.com',
        year: '2025',
        month: '09',
        day: '24',
    },
];

const initialState = {
    members: localStorage.getItem('members')
        ? JSON.parse(localStorage.getItem('members'))
        : memberData,
    authed: localStorage.getItem('authed') ? JSON.parse(localStorage.getItem('authed')) : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};
let no = initialState.members.length + 1;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { userid, password } = action.payload;
            const item = state.members.find((member) => member.userid === userid);
            if (item && item.password === password) {
                state.authed = true;
                state.user = item;
            }
            localStorage.setItem('members', JSON.stringify(state.members));
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logout: (state) => {
            state.authed = false;
            state.user = null;

            localStorage.setItem('members', JSON.stringify(state.members));
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        signup: (state, action) => {
            action.payload.id = no++;
            state.members.push(action.payload);

            localStorage.setItem('members', JSON.stringify(state.members));
            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
