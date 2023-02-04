const database = require("../utils/database");
const { DataTypes } = require("sequelize");

const Zamora = database.define("Zamora", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nameStore: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "name_Store",
  },
  productsStore: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "product_store",
  },
  
});

module.exports = Zamora;
