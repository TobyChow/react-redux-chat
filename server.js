var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var io = require('socket.io')(http);

//Stored as objects: {id:'sessionID', name:'participantName'}
var participants = [];

/****Server Stuff*****************************************************/
//Set IP address
app.set('ipaddr', '127.0.0.1');

//Set port
app.set('port', 8080);

//Set 'views' folder
// app.set('views', __dirname + '/views');

//Set view engine
// app.set('view engine', 'jade');


//Specify static content location
app.use(express.static(__dirname + '/app'));

//Tell server to support JSON request
app.use(bodyParser.json());

io.on('connection', function(socket) {
    console.log('connected');
});

//Start the http server at port and IP defined before
http.listen(app.get("port"), app.get("ipaddr"), function() {
    console.log("Server up and running. Go to http://" + app.get("ipaddr") + ":" + app.get("port"));
});
