
const database = require("../utils/database");
const {DataTypes} =require("sequelize");

const Agustin =database.define("agustin",{
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
      friendLastname: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "friend_lastname",
      },
      friendAge: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "friend_age",
      },
      friendLastname: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "friedn_number",
      },
})

module.exports = Agustin;