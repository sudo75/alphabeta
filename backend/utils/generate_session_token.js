const { session_token: config_session_token } = require('../config/config.js');
const token_length = config_session_token.LENGTH;

module.exports = () => {
    let session_token = '';

    const valid_chars = 'qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()<>,./?';
    
    for (let i = 0; i < token_length; i++) {
        const char = valid_chars[Math.floor(Math.random() * valid_chars.length)];

        session_token += char;
    }

    return session_token;
}