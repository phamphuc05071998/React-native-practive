import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
const initialState = {
  isLogin: false,
  token: "",
};
const authSlide = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logUserIn: (state, action: PayloadAction<string>) => {
      state.isLogin = true;
      state.token = action.payload;
    },
    logUserOut: (state) => {
      state.isLogin = false;
      state.token = "";
    },
  },
});

export const { logUserIn, logUserOut } = authSlide.actions;
export default authSlide.reducer;
