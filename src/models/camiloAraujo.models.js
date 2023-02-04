const database = require("../utils/database");
const { DataTypes } = require("sequelize");

const CamiloAraujo = database.define("CamiloAraujo", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "profession",
  },
});

module.exports = CamiloAraujo;
