var path = require('path');
var orm = require('./orm.js')

module.exports = function(app){
	app.get('/api/all', function(req, res){
		orm.findAll(function(err, docs){
			res.json(docs)
		})
	})
	app.post('/api/add', function(req, res){
		orm.addArticle(req.body, function(err, results){
			res.end()
		})
	})
	app.post('/api/delete', function(req, res){
		orm.deleteArticle(req.body._id, function(err, results){
			res.end()
		})
	})
	app.get('/', function(req, res){
		res.send(path.join(__dirname + '../public/index.html'))
	})
	
}