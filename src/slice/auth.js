import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
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
    registerUserSucces: (state) => {
      state.loggedIn = true;
      state.isLoading = false;
    },
    registerUserFailer: (state) => {
      state.isLoading = false
      state.error = 'error'
    },
  },
});

export const { loginUserStart, registerUserStart, registerUserSucces, registerUserFailer } = authSlice.actions;
export default authSlice.reducer;
