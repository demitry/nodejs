const http = require('http');

//function rqListener(req, res) {};
//http.createServer(rqListener);

//http.createServer(function (req, res) {});

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000); //http://localhost:3000/




