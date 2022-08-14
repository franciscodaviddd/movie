import axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const apiClient = axios.create({
  baseURL: apiConfig.url,
  headers: {
    "content-type": "aplication/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({
      ...params,
      api_key: apiConfig.api_key,
    }),
});

apiClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default apiClient;
