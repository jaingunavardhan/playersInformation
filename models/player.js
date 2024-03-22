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
    dob:{
        type: Sequelize.STRING,
        allowNull:true
    },
    imageURL:{
        type: Sequelize.STRING,
        allowNull: true
    },
    place:{
        type: Sequelize.STRING,
        allowNull: true
    },
    career:{
        type: Sequelize.TEXT('long'),
        allowNull: true
    },
    matches:{
        type:Sequelize.STRING,
        allowNull: true
    },
    score:{
        type:Sequelize.STRING,
        allowNull: true
    },
    fifties:{
        type:Sequelize.STRING,
        allowNull: true
    },
    centuries:{
        type:Sequelize.STRING,
        allowNull: true
    },
    wickets:{
        type:Sequelize.STRING,
        allowNull: true
    },
    average:{
        type:Sequelize.STRING,
        allowNull: true
    }
})

module.exports = Player;