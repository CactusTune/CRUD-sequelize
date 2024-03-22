import { config } from "dotenv";

config();

export const { PORT, DB_USER, DB_PASSWORD, DB_URL } = process.env;
