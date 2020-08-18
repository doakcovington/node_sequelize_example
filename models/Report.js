const Sequelize = require('sequelize');
const database = require('../config/database');

const Report = database.define('report', {
    date: {
        type: Sequelize.DATEONLY,
    },
    oxygen: {
        type: Sequelize.FLOAT
    }
});

module.exports = Report;