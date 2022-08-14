import axios from "axios";
import apiClient from "./apiClient";
import apiConfig from "./apiConfig";

export const category = {
  movie: "movie",
  tv: "tv",
};
export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};
export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const getApi = {
  movie: (type, params) => {
    const url = `/movie/${type}`;
    const response = axios.get(
      apiConfig.url + url + "?api_key=" + apiConfig.api_key,
      params
    );
    return response;
  },
  tv: (type, params) => {
    const url = `/tv/${type}`;
    const response = axios.get(
      apiConfig.url + url + "?api_key=" + apiConfig.api_key,
      params
    );
    return response;
  },
  getVideos: (cate, id) => {
    const url = `/${cate}/${id}/videos`;
    const response = axios.get(
      apiConfig.url + url + "?api_key=" + apiConfig.api_key,
      { params: {} }
    );
    return response;
  },
  search: (cate, params) => {
    const url = `/search/${cate}`;
    const response = axios.get(
      apiConfig.url + url + "?api_key=" + apiConfig.api_key,
      params
    );
    return response;
  },
  detail: (cate, id, params) => {
    const url = `/${cate}/${id}`;
    const response = axios.get(
      apiConfig.url + url + "?api_key=" + apiConfig.api_key,
      params
    );
    return response;
  },
  credits: (cate, id) => {
    const url = `/${cate}/${id}/credits`;
    const response = axios.get(
      apiConfig.url + url + "?api_key=" + apiConfig.api_key,
      { params: {} }
    );
    return response;
  },
  similar: (cate, id) => {
    const url = `/${cate}/${id}/similar`;
    const response = axios.get(
      apiConfig.url + url + "?api_key=" + apiConfig.api_key,
      { params: {} }
    );
    return response;
  },
};

export default getApi;
