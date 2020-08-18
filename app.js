//WDGTR
//NCWH
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { request } = require('http');
const { response } = require('express');
const { Sequelize } = require('sequelize');

const app = express();

app.get('/', (request, response) => response.send("We Don't Go To Ravenholm"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

const sequelize = new Sequelize('pulse_ox', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then(() => console.log('Database connected...'))
.catch(error => console.log('Error: ' + error)) 