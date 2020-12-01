var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
  //request and respond
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF8" });
  var q = url.parse(req.url, true).query;
  var txt = q.year + " --- " + q.month;
  res.end(txt);
});

server.listen(8082);
