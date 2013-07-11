var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var file = 'index.html';
var response = fs.readFileSync(file);

app.get('/', function(request, response) {
  response.send(response);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
