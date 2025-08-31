module.exports = {
    username: {
        MIN_LENGTH: 4,
        MAX_LENGTH: 32
    },
    password: {
        MIN_LENGTH: 8,
        MAX_LENGTH: 32
    },
    session_token: {
        LENGTH: 16, // 128 bit session id
        EXPIRATION: 1000 * 60 * 60 // in ms
    }
};