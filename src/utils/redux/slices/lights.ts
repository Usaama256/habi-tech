import { Reducer, createSlice } from "@reduxjs/toolkit";
import { Light } from "../../types";

const checkAllLightsOn = (lights: Light[]): boolean => {
  try {
    let allOn: boolean = true;
    for (let i = 0; i < lights.length; i++) {
      if (!lights[i].isOn) {
        allOn = false;
        break;
      }
    }
    return allOn;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const lightsSlice = createSlice({
  name: "lights",
  initialState: {
    lights: [],
    number: 0,
    allLightsOn: false,
    fetchingLights: false,
    refreshingLights: false,
    error: null,
  },
  reducers: {
    fetchLightsStart: (state): void => {
      state.error = null;
      state.fetchingLights = true;
      state.refreshingLights = false;
      state.lights = [];
      state.allLightsOn = false;
      state.number = 0;
    },
    refreshLightsStart: (state): void => {
      state.error = null;
      state.fetchingLights = false;
      state.refreshingLights = true;
    },
    lightsFetchSuccess: (state, actions): void => {
      state.error = null;
      state.fetchingLights = false;
      state.refreshingLights = false;
      state.lights = actions.payload;
      state.allLightsOn = checkAllLightsOn(actions.payload);
      state.number = parseInt(actions.payload.length, 10);
    },
    lightsFetchFailed: (state, actions): void => {
      state.error = actions.payload;
      state.fetchingLights = false;
      state.refreshingLights = false;
    },
    lightsReset: (state): void => {
      state.error = null;
      state.fetchingLights = false;
      state.refreshingLights = false;
      state.lights = [];
      state.allLightsOn = false;
      state.number = 0;
    },
  },
});

export const {
  fetchLightsStart,
  refreshLightsStart,
  lightsFetchSuccess,
  lightsFetchFailed,
  lightsReset,
} = lightsSlice.actions;

export const lightsRedux: Reducer = lightsSlice.reducer;
