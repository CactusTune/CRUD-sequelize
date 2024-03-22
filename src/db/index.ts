import { Sequelize } from "sequelize";
import { DB_PASSWORD, DB_URL, DB_USER } from "../constants/env.constants";

export const sequelize = new Sequelize(DB_USER!, DB_USER!, DB_PASSWORD, {
  host: DB_URL,
  dialect: "postgres",
  port: 5432,
});
