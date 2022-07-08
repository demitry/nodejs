// :) Express.js will simplify this raw logic

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    
    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> Enter message </title> </head>');
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"> <button type="submit"> Send </button> </form> </body>');
        res.write('</head>');
        return res.end();        
    }
    if(url === '/message' && req.method === 'POST') {
        
        const body = [];
        
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });   // listen for data event
        
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); //body will be text
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head> <title> My first page </title> </head>');
    res.write('<body> <h1>My first page, hello from my Node.js </h1> </body>');
    res.write('</head>');
    res.end();
});

server.listen(3000);
