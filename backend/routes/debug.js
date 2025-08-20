// Define router
const express = require('express');
const router_debug = express.Router();


// Authenitcation middleware
const auth = require('../middleware/auth.js');

// Set routes to controllers
const test = require('../controllers/debug/test.js');
router_debug.get('/', test);

const check_auth = require('../controllers/debug/check_auth.js');
router_debug.get('/check_auth', auth, check_auth);


module.exports = router_debug;