const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/login/login.html"));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/home/index.html"));
});

module.exports = router;