const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'cinnamon123',
    database: 'alphabeta', // db name will be defined; the db must be initialised before running this
    debug: false // toggle showing querries
});

module.exports = pool;