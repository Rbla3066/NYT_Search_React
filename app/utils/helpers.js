var axios = require('axios');

var helpers = {
	searchArticles: function(query, callback){
		return axios.get("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query.term + "&begin_date=" + query.start + "0101&end_date=" + query.end + "1231&api-key=e05abfb61c5346fea5bf75beb92d714e")
			.then(function(data){
				return callback(data);
			})
	},
	getSavedArticles: function(callback){
		return axios.get("http://rb-nyt-search.herokuapp.com/api/all")
			.then(function(data){
				return callback(data);
			})
	},
	addArticle: function(article, callback){
		var url = window.location.origin;
		return axios.post("http://rb-nyt-search.herokuapp.com/api/add", article)
			.then(function(response){
				return callback()
			})
	},
	deleteArticle: function(id, callback){
		return axios.post("http://rb-nyt-search.herokuapp.com/api/delete", id)
			.then(function(response){
				return callback()
			})
	}
}
module.exports = helpers;