import axios from "axios";
import config from "../config.json";

const apiEndpoint = "https://api.themoviedb.org/3";

const apiMovie = axios.create({
  baseURL: apiEndpoint,
});

apiMovie.interceptors.request.use((req) => {
  // req.params = {
  //   "api_key": config.api_key,
  //   language: 'fr-FR',
  // }
  // req.headers["Authorization"] = `Bearer ${config.Token}`;
  return req;
});

export default apiMovie;