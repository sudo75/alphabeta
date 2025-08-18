// Define router
const express = require('express');
const router_users = express.Router();

// Define routes
const controller_create_user = require('../controllers/users/create_user.js');
router_users.post('/create_user', controller_create_user);

module.exports = router_users;