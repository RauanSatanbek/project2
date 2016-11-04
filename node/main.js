var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var fs = require("fs");
var path = require("path");
var app = express();
app.use(cors());
app.use(bodyParser());
app.engine("ejs", require("ejs-locals"));
app.set("view engine", "ejs");

var Comments = require("./models/comments.js").Comments;
var comment = new Comments({
	userId: "9",
	postId: "3",
	text: "Могут обнаружить, поэтому измерять скорость базовых операций JavaScript («проводить микробенчмаркинг») до того, как вы изучите внутренности JavaScript-интерпретаторов и поймёте, что они реально делают на таком коде, не рекомендуется.",
	date: new Date()
});

comment.save(function(err, affected) {
	if(err) {
		console.log("Error");
	}
});

Comments.find(function(err, result) {
	if(err) {
		console.log("comments not found");
	} else {
		console.log(result);
	}

});
app.get("/", function(req, res, next) {
	res.render("index.ejs");
});

app.listen(3000, function() {
	console.log("Backend Started");
});

