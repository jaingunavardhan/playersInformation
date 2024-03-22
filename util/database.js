const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node_players_info',
    'root',
    'guna',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;