const database = require("../utils/database");
const { DataTypes } = require("sequelize");

const Katia = database.define("katia", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  petName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "pet_name",
  },

  petdAge: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "pet_age",
  },
  ownerNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "owner_number",
  },
});

module.exports = Katia;