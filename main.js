let http = require("http");
let fs = require("fs");
let sleep = require('sleep');
let events = require('events');

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

let data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("data read");

// non-blocking IO

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

sleep.sleep(1);

console.log("data read?");

// event loop

let eventEmitter = new events.EventEmitter();

let connectHandler = function connected(){
    console.log('connection successfull.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('data received succesfully.');
});

eventEmitter.emit('connection');