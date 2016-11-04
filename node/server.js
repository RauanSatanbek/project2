var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test1');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log("db error");
});
db.once('open', function callback () {
    console.log("Connected to DB!");
});

app.use(bodyParser());
app.use(cors());

app.get("/getInfo", function(req, res, next) {
	res.send("2000");
	next();
});
app.get("/", function(req, res, next) {
	var file = fs.ReadStream("icon.html");
	sendFile(file, res);
});

function sendFile(file, res) {
	file.pipe(res);
	file.on("error", function(err) {
		res.statusCode = 500;
		res.end("Server error");
	});

	res.on("close", function() {
		file.destroy();
	});
}
app.listen(3000, function(){
	console.log("Backend started");
});