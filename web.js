var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var file = 'index.html';

//Returns a buffer
var response = fs.readFileSync(file);

//Convert buffer to string
var string = response.toString('utf-8');

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
