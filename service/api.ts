import axios from "axios";

const api = axios.create({
  baseURL: 'https://g2prm9wj-8000.asse.devtunnels.ms/'
});

export default api;
