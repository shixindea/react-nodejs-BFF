import axios from "axios";
import { config } from "../config/index.js";

const client = axios.create({ baseURL: config.mockBaseUrl, timeout: 8000 });

export async function fetchUser() {
  const { data } = await client.get("/api/mock/user");
  return data;
}

export async function fetchBanners() {
  const { data } = await client.get("/api/mock/banners");
  return data;
}

export async function fetchRecommends() {
  const { data } = await client.get("/api/mock/recommends");
  return data;
}
