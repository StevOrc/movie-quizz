import axios from "axios";
import config from "../config.json";

const apiEndpoint = "https://api.themoviedb.org/3";

const apiMovie = axios.create({
  baseURL: apiEndpoint,
});

apiMovie.interceptors.request.use((req) => {
  const params = {
    ...req.params,
    api_key: config.api_key,
    language: "fr-FR",
    include_adult: false,
  };
  req.params = params;
  // req.headers["Authorization"] = `Bearer ${config.Token}`;
  return req;
});

export default apiMovie;
