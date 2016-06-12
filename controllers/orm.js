var mongojs = require('mongojs');
var db = mongojs('test', ['articles'])

var orm = {
	findAll: function(callback){
		db.articles.find(function(err, docs){
			return callback(err, docs)
		})
	},
	addArticle: function(article, callback){
		db.articles.insert(article, function(err, res){
			return callback(err, res)
		})
	},
	deleteArticle: function(id, callback){
		db.articles.remove({_id: id}, function(err, res){
			return callback(err, res)
		})
	}
}

module.exports = orm;