const { Sequelize } = require('sequelize');

module.exports = new Sequelize('pulse_ox', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});