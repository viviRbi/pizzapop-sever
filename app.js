var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {

  if (req.url === '/') {
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }

  if (req.url === '/pizza') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
      firstname: 'John',
      lastname: 'Doe'
    }
    res.end(JSON.stringify(obj))
  }


}).listen(1337, '127.0.0.1');