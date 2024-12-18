import dotenv from "dotenv";

dotenv.config({
  path: "../../.env",
});

export const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 9000;
export const API_URL = process.env.API_URL || "";
export const API_MOCK_URL = process.env.API_MOCK_URL || "";
export const ALLOWED_CLIENTS = process.env.ALLOWED_CLIENTS?.split(
  ",",
) as unknown as string;
export const MONGO_URL = process.env.MONGO_URL as unknown as string;
export const REDIS_URL = process.env.REDIS_URL || "";
export const WEB_URL = process.env.WEB_URL || "";
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
export const GOOGLE_SECRET_ID = process.env.GOOGLE_SECRET_ID || "";
export const GOOGLE_APIS_URL = process.env.GOOGLE_APIS_URL || "";
