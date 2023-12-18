import { Dispatch } from "@reduxjs/toolkit";
import {
  fetchUserStart,
  lightsReset,
  resetNotifications,
  userFetchFailed,
  userFetchSuccess,
  userReset,
} from "../redux/slices";
import { serverReq } from "../requestMethods";
import { UserLogin } from "../types";
import { AxiosError } from "axios";
import {
  fetchLightsStart,
  lightsFetchFailed,
  lightsFetchSuccess,
  refreshLightsStart,
} from "../redux/slices";
import { NavigateFunction } from "react-router-dom";

export const loginUser = async (
  dispatch: Dispatch,
  navigate: NavigateFunction,
  user: UserLogin
): Promise<boolean> => {
  try {
    dispatch(fetchUserStart());
    const res = await serverReq.post(`/habitech.api/login`, user);
    if (res?.status === 200) {
      await fetchAllLights(dispatch, false, res.data.id);
      dispatch(userFetchSuccess(res.data));
      navigate("/overview");
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  } catch (error) {
    const err = error as AxiosError;
    if (err.request) {
      if (err.request.status) {
        console.log(err.request, err.message);
        dispatch(userFetchFailed("Error U1: Check your nextwork connection"));
      } else {
        console.log(err.request, err.message);
        dispatch(userFetchFailed("Error U2: Check your nextwork connection"));
      }
    } else if (err.response) {
      console.log(err.response, err.message);
      if (err.response.status === 404) {
        dispatch(userFetchFailed("Error U3: Not Found"));
      } else {
        dispatch(userFetchFailed("Error U4: Something Went Wrong"));
      }
    } else {
      console.log(err.message);
      dispatch(userFetchFailed("Error U5: Something Went Wrong"));
    }
    return Promise.resolve(false);
  }
};

export const logoutUser = (dispatch: Dispatch): void => {
  try {
    dispatch(userReset());
    dispatch(lightsReset());
    dispatch(resetNotifications());
  } catch (error) {
    console.log(error);
  }
};

const fetchAllLights = async (
  dispatch: Dispatch,
  refresh: boolean,
  userId: number
): Promise<boolean> => {
  try {
    dispatch(refresh ? refreshLightsStart() : fetchLightsStart());
    const res = await serverReq.get(`/habitech.api/allLights/${userId}`);
    if (res?.status === 200) {
      dispatch(lightsFetchSuccess(res.data));
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  } catch (error) {
    const err = error as AxiosError;
    if (err.request) {
      if (err.request.status) {
        console.log(err.request, err.message);
        dispatch(lightsFetchFailed("Error L1: Check your nextwork connection"));
      } else {
        console.log(err.request, err.message);
        dispatch(lightsFetchFailed("Error L2: Check your nextwork connection"));
      }
    } else if (err.response) {
      console.log(err.response, err.message);
      if (err.response.status === 404) {
        dispatch(lightsFetchFailed("Error L3: Not Found"));
      } else {
        dispatch(lightsFetchFailed("Error L4: Something Went Wrong"));
      }
    } else {
      console.log(err.message);
      dispatch(lightsFetchFailed("Error L5: Something Went Wrong"));
    }
    return Promise.resolve(false);
  }
};
