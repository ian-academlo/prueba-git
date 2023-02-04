const database = require("../utils/database");

const { DataTypes } = require("sequelize");

const StevenStack = database.define("stevenStack", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  framework: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  github: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  facebook: {
    type: DataTypes.STRING,
  },
});

module.exports = StevenStack;
