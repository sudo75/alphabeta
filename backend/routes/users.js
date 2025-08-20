// Define router
const express = require('express');
const router_users = express.Router();

// Define routes -------------------------->

// Create user
const controller_create_user = require('../controllers/users/create_user.js');
router_users.post('/create_user', controller_create_user);

// Login
const controller_login = require('../controllers/users/login.js');
router_users.post('/login', controller_login);

module.exports = router_users;