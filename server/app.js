// requires

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = 5432;



// uses

app.use( express.static ('public'));
app.use( bodyParser.urlencoded({extended:true}));


// spin up the server
app.listen(port,function(){
  console.log('We are going to try something else on port ',port );
})
//routes

app.post('/math',function(req,res){
  console.log('/math route hit', req.body);
  if (req.body.type == 'add'){
    var answer = Number(req.body.x)+ Number(req.body.y);

  }
  if (req.body.type == 'subtract'){
    console.log('subtract')
    var answer = Number(req.body.x)- Number(req.body.y);

  }
  if (req.body.type == 'multiply'){
    console.log('multiplying');
    var answer = Number(req.body.x)* Number(req.body.y);

  }
  if (req.body.type == 'divide'){
    console.log('dividing');
    var answer = Number(req.body.x)/ Number(req.body.y);

  }
  console.log(answer);
  var objectToSend = {
    answer: answer
  };
  res.send(objectToSend);
});




//home bodyparser
app.get('/', function(req,res){
  console.log('home base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
})
