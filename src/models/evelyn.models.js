const database = require("../utils/database");
const { DataTypes } = require("sequelize");

const Evelyn = database.define('Evelyn',  {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  friendName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "friend_name",
  },
  friendAge: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "friend_age",
  }
});

module.exports = Evelyn;