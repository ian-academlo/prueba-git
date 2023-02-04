const { DataTypes } = require("sequelize")

const arielP = database.define("Ariel", {
   id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "friend_name",
   },
   password: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "friend_age",
   },
})

module.exports = arielP
