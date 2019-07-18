const http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

    response.end('写代码很快乐\n');
}).listen(8888);

console.log('Server running at http://localhost:8888/ ');