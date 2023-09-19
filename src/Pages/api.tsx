import axios from 'axios';

const api = axios.create({
  baseURL: "https://c7de-156-218-126-180.ngrok-free.app/api"
});

export default api;