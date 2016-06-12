var axios = require('axios');

var helpers = {
	searchArticles: function(query, callback){
		return axios.get("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query.term + "&begin_date=" + query.start + "0101&end_date=" + query.end + "1231&api-key=e05abfb61c5346fea5bf75beb92d714e")
			.then(function(data){
				return callback(data);
				console.log(data)
			})
	},
	getSavedArticles: function(callback){
		return axios.get("http://localhost:8080/api/all")
			.then(function(data){
				return callback(data);
			})
	},
	addArticle: function(article, callback){
		return axios.post("http://localhost:8080/api/add", article)
			.then(function(response){
				return callback()
			})
	},
	deleteArticle: function(id, callback){
		return axios.post("http://localhost:8080/api/delete", id)
			.then(function(response){
				return callback()
			})
	}
}
module.exports = helpers;