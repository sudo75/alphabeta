require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME, // db name will be defined; the db must be initialised before running this
    connectionLimit: 10,
    debug: false // toggle showing querries
});

module.exports = pool.promise();