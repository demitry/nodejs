/*
    Want to quit your running Node.js server?
    You can always do that by pressing CTRL + C in the terminal/ command prompt window where you started your server (i.e. where you ran node app.js).
*/

const http = require('http');

//function rqListener(req, res) {};
//http.createServer(rqListener);

//http.createServer(function (req, res) {});

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit(); //quit after the first request

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head> <title> My first page </title> </head>');
    res.write('<body> <h1>My first page, hello from my Node.js </h1> </body>');
    res.write('</head>');
    res.end();
    //We cannot write anymore, send back a response
});

server.listen(3000); //http://localhost:3000/

//  Request Object
// headers metadata
