class User {
    constructor(firstName, lastName) {
      this.FirstName = firstName;
      this.LastName = lastName;
    }
  }

function F() {
    // userList = [];
    // nodeList.push(new User("Admin", "Admin")); 
}

let userList = [];
userList.push(new User("Admin", "Admin")); 

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){

    }

    if(url === '/users' && method === 'GET'){
        // let userList = [];
        // userList.push(new User("Admin", "Admin")); 

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> My users page </title> </head>');
        res.write('<body> <h1> My users page, hello from my Node.js </h1>');
        res.write('<ul id="ul">');

        userList.forEach(function(user){
            res.write('<li>');
            res.write(user.FirstName + ', ' + user.LastName);
            res.write('</li>');
        });
             res.write('<li>');
             res.write('Test, Test');
             res.write('</li>');

        // for (const user of global.userList) {
        //     res.write('<li>');
        //     res.write(user.FirstName + ', ' + user.LastName);
        //     res.write('</li>');
        // }
        res.write('</ul>');
        res.write('</body>');
        res.write('</head>');
        res.end();
        return;
    }
    if(url === '/create-user' && method === 'POST'){
        
    }

    if(url === '/create-user' && method === 'GET'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head> <title> My Add User page </title> </head>');
        res.write('<body> <h1> My Add User page, hello from my Node.js </h1>');
        
		res.write('<form action="/create-user" method="POST">');
		res.write('  <label for="fname">First name:</label><br>');
		res.write('  <input type="text" id="fname" name="fname" value="John"><br>');
		res.write('  <label for="lname">Last name:</label><br>');
		res.write('  <input type="text" id="lname" name="lname" value="Doe"><br><br>');
		res.write('  <input type="submit" value="Submit">');
		res.write('</form> ');
		
        res.write('</body>');
        res.write('</head>');
        res.end();
        return;
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head> <title> My first page </title> </head>');
    res.write('<body> <h1> My first page, hello from my Node.js </h1> </body>');
    res.write('</head>');
    res.end();
}

exports.handler = requestHandler;