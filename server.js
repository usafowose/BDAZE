// App Dependencies
var express = require("express"); 
var mysql = require("mysql");

// Instantiation of Express
var app = express(); 

//setting default port unless assigned
var PORT = process.env.PORT || 8080; 

// mysql server connection config
var connection = mysql.createConnection({
    host: "192.168.99.100", 
    port: 3306,
    user: "root", 
    password: "docker", 
    database: "sún mọ"
}); 

// establishing mysql server connection with callback 
connection.connect(err => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});



