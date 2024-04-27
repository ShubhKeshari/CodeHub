require("dotenv").config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("eventManagement", "root",process.env.Password,{
    host:"localhost",
    port:3306,
    dialect:"mysql",
    // dialectOptions:{
    //     connectionTimeout: 86400
    // }
});

module.exports = sequelize;
