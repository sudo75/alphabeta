const verify_username = require('../../utils/verify_username.js');
const verify_password = require('../../utils/verify_password.js');

const { create_user } = require('../../models/users.js');

module.exports = async (req, res) => {
    const {username, password} = req.body;

    if (!verify_username(username)) res.status(400).json({message: 'Invalid username.'});
    if (!verify_password(password)) res.status(400).json({message: 'Invalid password.'});

    try {
        await create_user(username, password);
        res.status(201).json({message: 'User created!'});
    } catch (err) {
        switch (err.code) {
            case 'user_exists':
                res.status(409).json({message: err.message});
                break;

            default:
                res.status(500).json({message: "Could not create user."});
        }
    }
};