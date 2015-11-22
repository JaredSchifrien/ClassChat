var http = require('http');
var fs = require('fs');
var useTrustedConnection = false;
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
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
    //executeStatement1();
    executeStatement2();
    console.log("Finished commands");
});

function executeStatement() {
    
    var request = new Request(
        "CREATE TABLE celebs (id INTEGER, name TEXT, age INTEGER);", function(err) {
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