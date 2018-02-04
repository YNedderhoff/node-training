let http = require("http");
var fs = require("fs");
var sleep = require('sleep');
var events = require('events');

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

// blocking IO

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("data read");

// non-blocking IO

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

sleep.sleep(3);

console.log("data read?");