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

const raw = localStorage.getItem("members");
let initialMembers;
try {
  const parsed = raw ? JSON.parse(raw) : null;
  if (Array.isArray(parsed)) {
    const hasSeed = parsed.some(
      (m) => m?.userid === "lush" && m?.password === "lush123"
    );
    if (hasSeed) {
      initialMembers = parsed;
    } else {
      const toAdd = memberData.filter(
        (s) => !parsed.some((m) => m.userid === s.userid)
      );
      initialMembers = [...parsed, ...toAdd];
    }
  } else {
    initialMembers = memberData;
  }
} catch {
  initialMembers = memberData;
}

const initialState = {
  members: initialMembers,
  authed: localStorage.getItem("authed")
    ? JSON.parse(localStorage.getItem("authed"))
    : false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
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
      } else {
        state.authed = false;
        state.user = null;
      }
      localStorage.setItem("members", JSON.stringify(state.members));
      localStorage.setItem("authed", JSON.stringify(state.authed));
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.authed = false;
      state.user = null;

      localStorage.setItem("members", JSON.stringify(state.members));
      localStorage.setItem("authed", JSON.stringify(state.authed));
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    signup: (state, action) => {
      action.payload.id = no++;
      state.members.push(action.payload);

      localStorage.setItem("members", JSON.stringify(state.members));
      localStorage.setItem("authed", JSON.stringify(state.authed));
      localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
