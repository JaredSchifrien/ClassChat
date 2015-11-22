'use strict';

var express = require('express');
var app = express();
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

var braintree = require('braintree');

var bodyParser = require('body-parser');
var parseUrlEnconded = bodyParser.urlencoded({
  extended: false
});

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: 'ffdqc9fyffn7yn2j',
  publicKey: 'qj65nndbnn6qyjkp',
  privateKey: 'a3de3bb7dddf68ed3c33f4eb6d9579ca'
});

var config = {
    userName: 'ClassChatDBAdmin',
    password: 'wildhacks1!',
    server: 'classchatdb.database.windows.net',
    // If you are on Microsoft Azure, you need this:
    options: {encrypt: true, database: 'ClassChatDB'}
};

var connection = new Connection(config);
connection.on('connect', function(err) {
// If no error, then good to proceed.
    console.log("Connected");
    //executeStatement();
});

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {

  gateway.clientToken.generate({}, function (err, res) {

    response.render('classchat');
  });

});

app.post('/myaction', parseUrlEnconded, function(req, res) {
  
  var request = new Request(
        "INSERT INTO users (name, class) VALUES ("+req.body.name+", "+req.body.class+");", function(err) {
    if (err) {
        console.log(err);} 
    });
    
    connection.execSql(request);
  
  res.send('You sent the name "' + req.body.name + '" who is in the class '+req.body.class+'.');
  
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

module.exports = app;

function executeStatement() {
    
    var request = new Request(
        "CREATE TABLE users (name TEXT, class TEXT);", function(err) {
    if (err) {
        console.log(err);} 
    });
    
    connection.execSql(request);
}

function executeStatement1() {
    
    var request = new Request(
        "INSERT INTO celebs (id, name, age) VALUES (1, 'Justin Bieber', 21);", function(err) {
    if (err) {
        console.log(err);} 
    });
    
    connection.execSql(request);
}

function executeStatement2() {
    
    var request = new Request(
        "SELECT name FROM celebs;", function(err) {
    if (err) {
        console.log(err);} 
    });
    
    connection.execSql(request);
}