// Define router
const express = require('express');
const router_users = express.Router();

// Define routes -------------------------->

// Create user
const controller_create_account = require('../controllers/users/create_account.js');
router_users.post('/create_account', controller_create_account);

// Login
const controller_login = require('../controllers/users/login.js');
router_users.post('/login', controller_login);

module.exports = router_users;