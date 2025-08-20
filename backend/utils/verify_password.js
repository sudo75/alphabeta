const { password: config_password } = require('../config/config.js');

module.exports = (password) => {
    if (typeof password !== "string") return false;
    if (password.length < config_password.MIN_LENGTH || password.length > config_password.MAX_LENGTH) return false;

    return true;
}