const { DataTypes } = require('sequelize');

const sequelize = require("../config/db");

const userModel = sequelize.define("users",{
    email:{type:DataTypes.STRING,allowNull:false},
    password:{type:DataTypes.STRING,allowNull:false},
    username:{type:DataTypes.STRING,allowNull:false}
},{
    timestamps:false
});

module.exports = userModel;