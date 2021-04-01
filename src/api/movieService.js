import axios from "axios";

const apiEndpoint = "https://developers.themoviedb.org/3";

const apiMovie = axios.create({
  baseURL: apiEndpoint,
});
