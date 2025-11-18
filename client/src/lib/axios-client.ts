import { CustomError } from "@/types/custom-error.type";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const options = {
  baseURL,
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(options);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Handle cases where error.response might be undefined (network errors, timeouts, etc.)
    if (!error.response) {
      const customError: CustomError = {
        ...error,
        message: error.message || "Network error occurred",
        errorCode: "NETWORK_ERROR",
      };
      return Promise.reject(customError);
    }

    const { data, status } = error.response;

    if (data === "Unauthorized" && status === 401) {
      window.location.href = "/";
    }

    const customError: CustomError = {
      ...error,
      message: data?.message || error.message || "An error occurred",
      errorCode: data?.errorCode || "UNKNOWN_ERROR",
    };

    return Promise.reject(customError);
  }
);

export default API;
