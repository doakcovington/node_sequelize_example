//WDGTR
//NCWH
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { request } = require('http');
const { response } = require('express');
const database = require('./config/database');


const app = express();

app.get('/', (request, response) => response.send("We Don't Go To Ravenholm"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

//Report routes
app.use('/reports', require('./routes/reports'));

// Test database connection
database.authenticate()
.then(() => console.log('Database connected...'))
.catch(error => console.log('Error: ' + error)) 