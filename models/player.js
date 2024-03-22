const Sequelize = require('sequelize');
const sequelize = require('../util/database.js');

const Player = sequelize.define('player', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    dob:Sequelize.DATE,
    imageURL:Sequelize.STRING,
    place:Sequelize.STRING,
    career:Sequelize.STRING,
    matches:Sequelize.INTEGER,
    score:Sequelize.INTEGER,
    fifties:Sequelize.INTEGER,
    centuries:Sequelize.INTEGER,
    wickets:Sequelize.INTEGER,
    average:Sequelize.DOUBLE,
})

module.exports = Player;