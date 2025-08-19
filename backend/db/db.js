require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.ALPHABETA, // db name will be defined; the db must be initialised before running this
    connectionLimit: 10,
    debug: false // toggle showing querries
});

module.exports = pool;