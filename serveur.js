var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var user = {
	username:"dylan",
	password:"lalali",
}

app.use(bodyParser());

app.post("/login", function(req , res){
	res.send('post ok');
	console.log(req.body);
	console.log(user);
	if (req.body.username === user.username && req.body.password === user.password) {
		console.log("ok passed");
	}else{
		console.log("error");
	}
})


app.listen(1337 , function(){
	console.log("listen on 1337");
});
app.use(express.static('public'))

