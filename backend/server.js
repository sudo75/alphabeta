// Start server

const app = require('./app.js');

const http = require('http');
const server = http.createServer(app);

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
});