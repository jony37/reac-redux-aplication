import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // LOGIN
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSucces: (state) => {},
    loginUserFailer: (state) => {},

    // REGISTER
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSucces: (state) => {},
    registerUserFailer: (state) => {},
  },
});

export const { loginUserStart, registerUserStart } = authSlice.actions;
export default authSlice.reducer;
