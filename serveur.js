var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var user = {
	username:"dylan",
	password:"lalali",
}

app.use(bodyParser());

app.post("/login", function(req , res){
	
	console.log(user.username);
	console.log(req.body.username)

	if (req.body.username === user.username && req.body.password === user.password) {
		res.send("You are connected");
		console.log("ok passed");
	}else{
		res.send("error")
	}
})


app.listen(1337 , function(){
	console.log("listen on 1337");
});
app.use(express.static('public'))

