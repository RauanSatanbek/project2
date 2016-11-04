var User = require("./models/user.js").User;

// var user = new User({
// 	name: "Rauan Satanbek",
// 	login: "rauan",
// 	password: "123456"
// });

// user.save(function(err, user, affected) {
// 	if(err) console.log("Error");
// });

User.find(function(err, result) {
	if(err) console.log("Error");
	else {
		console.log(result);
	}
});