const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Movie = sequelize.define('movie', {
    image : { type : DataTypes.STRING, allowNull : false },
    title : { type : DataTypes.STRING, allowNull : false },
    rating : { type : DataTypes.DOUBLE, allowNull : false }
}, {
    timestamps : false
})

// select * from movies;
// User.findAll().then(console.log).catch(console.log);

module.exports = {
    Movie
}