import { Sequelize } from "sequelize-typescript";
import * as models from "../models";

export const sequelize: Sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: "mysql",
  logging: false,
  models: Object.values(models)
})