var express = require("express");
var app = express();
var port = 5000;
app.use(express.static(__dirname + '/public')); 

var io = require('socket.io').listen(app.listen(port));

// Send data to all connected clients
function sendVizData() {
    io.sockets.emit('viz-load', { time: new Date().toJSON() });
}
// Send data every 5 seconds
setInterval(sendVizData, 5000);

//Initial handshake
io.sockets.on('connection', function(socket) {
    socket.emit('init-server', {message:'Server connection established'});
    socket.on('init-client', console.log);
});

console.log("Listening on port " + port);