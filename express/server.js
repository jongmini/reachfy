var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function(req, res){
  console.log("server is running");
});

app.get('/payment-service/transactions/orders/a0ZK0000001oepvMAA', function(req, res){
  res.sendfile(__dirname + '/payment.json');
});

app.get('/reach-directory', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.listen(3000);
console.log('Server running at 3000');