import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5005/api",
  withCredentials: true,
});