var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());

app.get('/',function(req,res){
  console.log("In get.");
  res.send("Sup");
});

var port = process.env.PORT || 3001;
app.listen(port);
console.log("Listening on 3001");