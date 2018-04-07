var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/',function(req,res){
  console.log("In get.");
  res.send("Sup");
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

var port = process.env.PORT || 3001;
server.listen(port);
console.log("Listening on 3001");