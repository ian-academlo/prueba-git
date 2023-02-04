const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Oscar1 = db.define("oscar", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  make: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  motor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  transmission: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Oscar1;