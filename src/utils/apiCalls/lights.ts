import { Dispatch } from "@reduxjs/toolkit";
import { serverReq } from "../requestMethods";
import {
  fetchLightsStart,
  lightsFetchFailed,
  lightsFetchSuccess,
  refreshLightsStart,
} from "../redux/slices";
import { SwitchAction } from "../types";
import { AxiosError } from "axios";

export const fetchAllLights = async (
  dispatch: Dispatch,
  refresh: boolean,
  userId: number
): Promise<boolean> => {
  try {
    dispatch(refresh ? refreshLightsStart() : fetchLightsStart());
    const res = await serverReq.get(`/allLights/${userId}`);
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

export const switchLight = async (
  dispatch: Dispatch,
  device_id: number,
  action: SwitchAction,
  userId: number
): Promise<boolean> => {
  try {
    dispatch(refreshLightsStart());
    const res = await serverReq.get(
      `/switchlight/${device_id}/${action}/${userId}`
    );
    if (res?.status === 200) {
      dispatch(lightsFetchSuccess(res.data));
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  } catch (error) {
    const err = error as AxiosError;
    if (err?.request) {
      if (err.request.status) {
        console.log(err.request, err.message);
        dispatch(lightsFetchFailed("Error L6: Check your nextwork connection"));
      } else {
        console.log(err.request, err.message);
        dispatch(lightsFetchFailed("Error L7: Check your nextwork connection"));
      }
    } else if (err.response) {
      console.log(err.response, err.message);
      if (err.response.status === 404) {
        dispatch(lightsFetchFailed("Error L8: Not Found"));
      } else {
        dispatch(lightsFetchFailed("Error L9: Something Went Wrong"));
      }
    } else {
      console.log(err.message);
      dispatch(lightsFetchFailed("Error L10: Something Went Wrong"));
    }
    return Promise.resolve(false);
  }
};

export const switchAllLights = async (
  dispatch: Dispatch,
  action: SwitchAction,
  userId: number
): Promise<boolean> => {
  try {
    dispatch(refreshLightsStart());
    const res = await serverReq.get(`/switchalllights/${action}/${userId}`);
    if (res?.status === 200) {
      dispatch(lightsFetchSuccess(res.data));
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  } catch (error: unknown) {
    const err = error as AxiosError;
    if (err?.request) {
      if (err.request.status) {
        console.log(err.request, err.message);
        dispatch(lightsFetchFailed("Error L6: Check your nextwork connection"));
      } else {
        console.log(err.request, err.message);
        dispatch(lightsFetchFailed("Error L7: Check your nextwork connection"));
      }
    } else if (err.response) {
      console.log(err.response, err.message);
      if (err.response.status === 404) {
        dispatch(lightsFetchFailed("Error L8: Not Found"));
      } else {
        dispatch(lightsFetchFailed("Error L9: Something Went Wrong"));
      }
    } else {
      console.log(err.message);
      dispatch(lightsFetchFailed("Error L10: Something Went Wrong"));
    }
    return Promise.resolve(false);
  }
};
