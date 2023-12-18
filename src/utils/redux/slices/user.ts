import { Reducer, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {
      id: 0,
      phoneContact: "",
      profilePicture: "",
      location: "",
      username: "",
      email: "",
      pass: "",
    },
    // currentUser: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    fetchUserStart: (state): void => {
      state.error = null;
      state.isFetching = true;
    },
    userFetchSuccess: (state, actions): void => {
      state.currentUser = actions.payload;
      state.error = null;
      state.isFetching = false;
    },
    userFetchFailed: (state, actions): void => {
      //   state.currentUser = "";
      state.error = actions.payload;
      state.isFetching = false;
    },
    userReset: (state): void => {
      state.currentUser = {
        id: 0,
        phoneContact: "",
        profilePicture: "",
        location: "",
        username: "",
        email: "",
        pass: "",
      };
      state.isFetching = false;
      state.error = null;
    },
  },
});

export const { fetchUserStart, userFetchSuccess, userFetchFailed, userReset } =
  userSlice.actions;

export const userRedux: Reducer = userSlice.reducer;
