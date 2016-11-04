// var mongoose = require("../libs/mongoose.js");
// var Schema = mongoose.Schema;

// var schema = new Schema({
// 	name: String,
// 	password: String
// });

// exports.User = mongoose.model("User", schema);


var mongoose = require("../libs/mongoose.js");
var Schema = mongoose.Schema;
var schema = new Schema({
	name: String,
	login: String,
	password: String
});

exports.User = mongoose.model("User", schema);