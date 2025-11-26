import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT ? Number(process.env.PORT) : 5000,
  mockBaseUrl: process.env.MOCK_BASE_URL || "http://localhost:5000",
};
