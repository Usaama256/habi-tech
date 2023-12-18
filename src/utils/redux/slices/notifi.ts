import { Reducer, createSlice } from "@reduxjs/toolkit";

const notifi = createSlice({
  name: "notifications",
  initialState: {
    notifications: [],
    unreadNumber: 1,
  },
  reducers: {
    setNotifications: (state, actions): void => {
      state.notifications = actions.payload;
    },
    resetNotifications: (state): void => {
      state.notifications = [];
      state.unreadNumber = 0;
    },
  },
});

export const { setNotifications, resetNotifications } = notifi.actions;

export const notifiRedux: Reducer = notifi.reducer;
