// Define router
const express = require('express');
const router_debug = express.Router();

// Set routes to controllers

const controller_debug_test = require('../controllers/debug/test.js');
router_debug.get('/', controller_debug_test);


module.exports = router_debug;