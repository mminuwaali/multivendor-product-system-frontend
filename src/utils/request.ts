import axios from "axios";
import { handleError } from "./parser";
import { TokenManager } from "./token";
import { BASE_URL } from "@/constants/settings";

export const api = axios.create({ baseURL: BASE_URL });

api.interceptors.request.use(
  (config) => {
    const token = TokenManager.getAccessToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    handleError(error);
    return Promise.reject(error);
  }
);
