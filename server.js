var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;
var path = require('path')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


staticContentFolder = __dirname + '/public';
app.use(express.static(staticContentFolder));

require('./controllers/routes.js')(app)


app.listen(PORT, function() {
	console.log("Server listening on PORT: " + PORT);
});