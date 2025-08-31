const db = require('../db/db.js');

async function create_account(username, password) {
    if (await userExists(username)) {
        const err = new Error("User of specified username already exists.");
        err.code = "user_exists";
        throw err;
    };

    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    await db.query(sql, [username, password]);
}

async function userExists(username) {
    const sql = 'SELECT * FROM users WHERE username = ?';
    const [result] = await db.query(sql, [username]); // put result in braces to get first element -- rows, ignore fields (2nd element)

    if (result.length > 0) return true;

    return false;

}


const generate_session_token = require('../utils/generate_session_token.js');
async function login(username, password) {
    const [result] = await db.query('SELECT password FROM users WHERE username = ?', [username]);
    const stored_password = result[0]?.password;

    const session_token = generate_session_token();

    // Validate username & password
    if (!stored_password || stored_password !== password) {
        const err = new Error("Incorrect username or password.");
        err.code = 'invalid_credentials';
        throw err;
    }

    // Set session token
    await db.query('UPDATE users SET session_token = ?, session_created_at = ? WHERE username = ?', [session_token, new Date(), username]);

    return session_token;
}

module.exports = {
    create_account,
    login
};