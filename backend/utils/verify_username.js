const { username: config_username } = require('../config/config.js');

module.exports = (username) => {
    if (typeof username !== "string") return false;
    if (username.length < config_username.MIN_LENGTH || username.length > config_username.MAX_LENGTH) return false;

    return true;
}