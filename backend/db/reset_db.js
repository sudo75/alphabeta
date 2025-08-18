const prompt = require('prompt-sync')();
require('dotenv').config();
const sql = require('mysql2/promise');

const db_password = process.env.DB_PASSWORD;


const confirm = prompt("Reset database?  This action cannot be undone! (y/n) ");
if (confirm !== 'y') return console.log("Aborted.");

const password_input = prompt("Input password: ");
if (password_input !== db_password) return console.log("Aborted.");


async function deleteDatabase() {
    const db_host = process.env.DB_HOST;
    const db_user = process.env.DB_USER;
    const db_name = process.env.DB_NAME;
    
    const connection = await sql.createConnection({
        database: db_name,
        host: db_host,
        user: db_user,
        password: db_password
    });

    await connection.execute('DROP DATABASE IF EXISTS alphabeta;');
    console.log("Database has been reset.");

    await connection.end();
}


deleteDatabase();