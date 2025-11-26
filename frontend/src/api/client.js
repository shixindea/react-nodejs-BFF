import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_BFF_BASE_URL || "http://localhost:5000",
  timeout: 8000,
});

export default client;
