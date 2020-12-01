var http = require("http");

var events = require("events");

var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(req, res) {
  //request and respond

  eventEmitter.emit("someone requested", "Test"); //Event Trigger
  res.end("Server Works!!!");
});

eventEmitter.on("someone requested", function(data) {
  console.log("A request has been done on the server!", data);
}); //Event Listener

server.listen(3000, "localhost", function() {
  console.log("Server started on port : 3000");
});
