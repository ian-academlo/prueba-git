const database = require("../utils/database");
const { DataTypes } = require("sequelize");

const Ian = database.define("ian", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  lastname: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "friend_age",
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "friedn_number",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: "friedn_number",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "friedn_number",
  },
});

module.exports = Ian;
