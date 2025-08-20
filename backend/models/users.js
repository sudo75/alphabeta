const db = require('../db/db.js');

async function create_user(username, password) {
    if (await userExists(username)) {
        const err = new Error("User of specified username already exists.");
        err.code = "user_exists";
        throw err;
    };

    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    await db.query(sql, [username, password]);
}

async function userExists(username) {
    try {
        const sql = 'SELECT * FROM users WHERE username = ?';
        const result = await db.query(sql, [username]);

        if (result[0]) return true;

        return false;
    } catch (err) {
        console.error(err);
        throw new Error("Error determining if user exists.");
    }
}

module.exports = {
    create_user
};