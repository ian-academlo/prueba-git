const database = require("../utils/database");
const { DataTypes } = require("sequelize");

const Sebas = database.define("sebas", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  phoneBrand: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "phone_brand",
  },
  phoneModel: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "phone_model",
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Sebas;
