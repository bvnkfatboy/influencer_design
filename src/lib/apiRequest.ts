import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.SERVER_URL,
  withCredentials: true,
});

export default apiRequest;
