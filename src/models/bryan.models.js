const database = require("../utils/database");
const { DataTypes } = require("sequelize");

const Bryan=database.define("bryan",{
    name:{
    type:DataTypes.STRING
    }
})

module.exports=Bryan