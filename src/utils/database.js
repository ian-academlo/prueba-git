const { Sequelize } = require("sequelize");
require("dotenv").config();

const database = new Sequelize({
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  logging: false,
});

module.exports = database;
