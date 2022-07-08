const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes.handler); // Wow! Create a server, use function in routes module to handle incoming requests

console.log(routes.someText);

server.listen(3000);
