const fs = require("fs");
require("dotenv").config();
const mysql = require('mysql2/promise'); // require promise version to use await for cleaner code

const path = require("path");

async function initDB() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            // do not define db name in case the db does not exist
            multipleStatements: true
        });

        // Create DB
        await connection.query('CREATE DATABASE IF NOT EXISTS alphabeta;'); // use await -- excecute returns promise
        await connection.query('USE alphabeta');

        // Create tables

        const user_schema = fs.readFileSync(path.join(__dirname, "schemas/user_schema.sql"), "utf8"); // this is a blocking/sync operation that may delay the program; okay for short sql files
        await connection.query(user_schema);


        console.log("Created database");
        await connection.end();

    } catch (err) {
        console.error(err);
    }
}

initDB();