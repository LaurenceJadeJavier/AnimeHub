import axios from "axios";

const api = axios.create({
  baseURL: `https://myanimeapitest.vercel.app`
});

export default api;
