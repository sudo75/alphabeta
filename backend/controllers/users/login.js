const {login} = require('../../models/users.js');

module.exports = async (req, res) => {
    try {
        const {username, password} = req.body;

        // Log in
        await login(username, password);

        // Set session token cookie


        res.status(200).json({message: 'Logged in!'});
    } catch (err) {
        switch (err.code) {
            case 'invalid_credentials':
                res.status(401).json({message: err.message});
                break;

            default:
                res.status(401).json({message: 'Login failed.'});
        }
        
    }

}