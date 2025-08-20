const db = require('../db/db.js');

module.exports = async (req, res) => {
    try {

        const session_token = req.cookies.session_token;

        const [result] = await db.query('SELECT id FROM users WHERE session_token = ? AND session_created_at > DATE_SUB(NOW(), INTERVAL 2 HOUR)', [session_token]);

        if (result.length === 0) return res.status(401).json({message: "Invalid credentials or expired session token."});

        next();

    } catch (err) {
        await res.status(500).json({message: "Authentication failed."});
    }


}