const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes); // Wow! Create a server, use function in routes module to handle incoming requests

server.listen(3000);
