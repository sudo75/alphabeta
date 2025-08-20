const {login} = require('../../models/users.js');
const config = require('../../config/config.js');

module.exports = async (req, res) => {
    try {
        const {username, password} = req.body;

        // Log in
        const session_token = await login(username, password);

        // Set session token cookie

        res.cookie('session_token', session_token, {
            httpOnly: true, // prevent access by JS
            secure: false, // set to true for HTTPS
            sameSite: 'Strict',
            expires: new Date(Date.now() + config.session_token.EXPIRATION) // date now + time in ms
        });

        res.status(200).json({message: 'Logged in!'});
    } catch (err) {
        switch (err.code) {
            case 'invalid_credentials':
                res.status(401).json({message: err.message});
                break;

            default:
                res.status(500).json({message: 'Login failed.'});
        }
        
    }

}