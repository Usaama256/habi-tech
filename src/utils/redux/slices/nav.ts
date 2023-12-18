import { Reducer, createSlice } from "@reduxjs/toolkit";

const nav = createSlice({
  name: "nav",
  initialState: {
    sidebar: false,
  },
  reducers: {
    openSidebar: (state): void => {
      state.sidebar = true;
    },
    closeSidebar: (state): void => {
      state.sidebar = false;
    },
  },
});

export const { openSidebar, closeSidebar } = nav.actions;

export const navRedux: Reducer = nav.reducer;
