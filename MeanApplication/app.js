require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var  bodyParser = require('body-parser');
var  routes = require('./api/routes');
app.set('port', 3000);


//Using middleware (app.use)
//Order of the middleware is important, they run sequentially
app.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

//We can deliver static files by setting static folder
app.use(express.static(path.join(__dirname, "public"))); //URL:localhost:3000</index.html(optional)>
//app.use("/public",express.static(path.join(__dirname, "public"))); //URL:localhost:3000/public</index.html(optional)>

app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/api', routes);
app.use('/fonts', express.static(__dirname + '/fonts'));

//app.listen(app.get('port'));
var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log("Magic happens on port number "+port);
});



//Test Nodemon Verbose
//One method of sending files
// app.get('/', function(req, res) {
// 	console.log("Get the Homepage!");
// 	res
// 	.status(200)
// 	.sendFile(path.join(__dirname, "public", "index.html"));
// });


// app.get('/json', function(req, res) {
// 	console.log("Get the JSON!");
// 	res
// 	.status(200)
// 	.json({"JsonData" : true});
// });

// app.get('/file', function(req, res) {
// 	console.log("Get the File!");
// 	res
// 	.status(200)
// 	.sendFile(path.join(__dirname, "app.js"));
// });