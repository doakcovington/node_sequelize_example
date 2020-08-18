//WDGTR
//NCWH
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { request } = require('http');
const { response } = require('express');

const app = express();

app.get('/', (request, response) => response.send("We Don't Go To Ravenholm"));

const PORT = porcess.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));