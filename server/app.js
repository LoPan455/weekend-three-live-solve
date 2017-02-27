// requires

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var path = require('path');
var port = 5432;



// uses

app.use( express.static ('public'));


// spin up the server
app.listen(port,function(){
  console.log('We are going to try something else on port ',port );
})
//routes

app.post('/math',function(req,res){
  console.log('');
})

//home bodyparser
app.get('/', function(req,res){
  console.log('home base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
})
