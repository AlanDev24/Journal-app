import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //? 'checking', 'authenticated'
    uid: null,
    eamil: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, {payload}) => {
      state.status= "authenticated", //? 'checking', 'authenticated'
      state.uid= payload.uid;
      state.eamil= payload.eamil;
      state.displayName= payload.displayName
      state.photoURL= payload.photoURL;
      state.errorMessage= null;
    },
    logOut: (state, {payload}) => {
      state.status= "not-authenticated", //? 'checking', 'authenticated'
      state.uid= null;
      state.eamil= null;
      state.displayName= null;
      state.photoURL= null;
      state.errorMessage= payload?.errorMessage ;
    },
    checkingCredentials: (state) => {
        state.status = 'checking';
    },
  },
});

export const { login, logOut, checkingCredentials } = authSlice.actions;
