const express = require('express');
const router = express.Router();

router.get('/', (request, response) => response.send('Howdy from reports.js'));

module.exports = router;