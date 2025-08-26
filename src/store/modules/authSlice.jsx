import { createSlice } from '@reduxjs/toolkit';
import { getKakaoLogin } from './getThunk';
const memberData = [
    {
        id: 1,
        userid: 'lush',
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

const raw = localStorage.getItem('members');
let initialMembers;
try {
    const parsed = raw ? JSON.parse(raw) : null;
    if (Array.isArray(parsed)) {
        const hasSeed = parsed.some((m) => m?.userid === 'lush' && m?.password === 'lush123');
        if (hasSeed) {
            initialMembers = parsed;
        } else {
            const toAdd = memberData.filter((s) => !parsed.some((m) => m.userid === s.userid));
            initialMembers = [...parsed, ...toAdd];
        }
    } else {
        initialMembers = memberData;
    }
} catch {
    initialMembers = memberData;
}

const initialState = {
    members: localStorage.getItem('members')
        ? JSON.parse(localStorage.getItem('members'))
        : initialMembers,
    authed: localStorage.getItem('authed') ? JSON.parse(localStorage.getItem('authed')) : false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    loading: false,
    error: null,
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
            } else {
                state.authed = false;
                state.user = null;
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
    extraReducers: (builder) => {
        builder
            .addCase(getKakaoLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getKakaoLogin.fulfilled, (state, action) => {
                state.loading = false;

                if (action.payload.newUser) {
                    state.members.push({ id: no++, ...action.payload.newUser });
                }
                state.authed = true;
                state.user = action.payload.user;
                console.log('카카오 로그인 성공했음:', action.payload);
            })
            .addCase(getKakaoLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                console.error('카카오 로그인 실패:', action.payload);
            });
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
