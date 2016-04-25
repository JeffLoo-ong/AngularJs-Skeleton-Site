var express = require('express');

var app = express();
var server = require('http').createServer(app);
var port = 3000;
var localhost = "127.0.0.1";
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.listen(port, function() {
  console.log('Listening on ' + localhost + ":" + port);
});
