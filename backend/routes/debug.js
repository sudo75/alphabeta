// Define router
const express = require('express');
const router_debug = express.Router();

// Set routes to controllers

const test = require('../controllers/debug/test.js');
router_debug.get('/', test);

const check_session_token = require('../controllers/debug/check_session_token.js');
router_debug.get('/', check_session_token);


module.exports = router_debug;