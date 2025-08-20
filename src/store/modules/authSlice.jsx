import { createSlice } from "@reduxjs/toolkit";

const memberData = [
  {
    id: 1,
    userid: "lush",
    password: "lush123",
    passwordConfirm: "lush123",
    name: "홍길동",
    phoneNum1: "1234",
    phoneNum2: "5678",
    email: "abc@naver.com",
    year: "2025",
    month: "09",
    day: "24",
  },
];

const initialState = {
  members: memberData,
  authed: false,
  user: null,
};
let no = initialState.members.length + 1;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { userid, password } = action.payload;
      const item = state.members.find((member) => member.userid === userid);
      if (item && item.password === password) {
        state.authed = true;
        state.user = item;
        localStorage.setItem(
          "auth",
          JSON.stringify({ authed: true, user: item })
        );
      }
    },
    logout: (state) => {
      state.authed = false;
      state.user = null;
      localStorage.removeItem("auth");
    },
    signup: (state, action) => {
      action.payload.id = no++;
      state.members.push(action.payload);
      localStorage.removeItem("auth");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
