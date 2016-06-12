var React = require('react');
var Query = require('./Query.js');
var Results = require('./Results.js');
var Saved = require('./Saved.js');
var search = require('../utils/helpers.js');

var Parent = React.createClass({
	getInitialState: function(){
		return({
			query: {
				term: "Coding",
				start: "2016",
				end: "2016"
			},
			lastQuery: {
				term: "Coding",
				start: "2016",
				end: "2016"
			},
			results: [],
			saved: [{headline: {main: "No Saved Articles"}}]
		})
	},
	setQuery: function(query){
		this.setState({
			query: query
		})
	},
	componentWillMount: function(){
		this.getSavedArticles()
	},
	componentDidUpdate: function(){
		if(this.state.query != this.state.lastQuery){
			this.setState({
				lastQuery: this.state.query
			})
			search.searchArticles(this.state.query, function(res){
				this.setState({
					results: res.data.response.docs
				})
			}.bind(this))
		}
	},
	getSavedArticles: function(){
		search.getSavedArticles(function(data){
			this.setState({
				saved: data
			})
		}.bind(this))
	},
	render: function(){

		return(

			<div className="container">
				<div className="row">
					<div className="jumbotron text-center">
						<h2>NY Times Search</h2>
						<p><em>Search and save New York Times articles by key terms.</em></p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<Query setQuery={this.setQuery} />
					</div>
					<div className="col-md-6">
						<Results res={this.state.results} getNewSaved={this.getSavedArticles} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Saved saved={this.state.saved} getNewSaved={this.getSavedArticles} />
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Parent;