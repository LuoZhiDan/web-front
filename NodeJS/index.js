/**
 * Created by zdluoa on 2017/3/13.
 */
var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('hello world!');
}).listen(8888);

console.log('server running!');