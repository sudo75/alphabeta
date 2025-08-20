// Define app & middleware

const express = require('express');

const app = express();

const path = require('path');

// Middleware
app.use(express.json()); // to read json body

// Define routes

const router_debug = require('./routes/debug.js');
app.use('/api/debug', router_debug);

const router_users = require('./routes/users.js');
app.use('/api/users', router_users);


// Put last to prevent 404 errors
app.use(express.static(path.join(__dirname, '../public')));


module.exports = app;