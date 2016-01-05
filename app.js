var http = require('http');

var accountBalance = require('./accountBalance.js');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write('is this working');
    response.write(accountBalance.balance());
    response.end();
}).listen(3000);

console.log('listening on port 3000');
