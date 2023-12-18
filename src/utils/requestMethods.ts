import axios, { AxiosInstance } from "axios";
axios.defaults.withCredentials = true;

export const serverReq: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
  headers: {
    bearer: "",
    auth: "",
    signature: "",
    // "Content-Type": "application/json",
  },
});
