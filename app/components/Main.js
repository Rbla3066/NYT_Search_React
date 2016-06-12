var React = require('react');
var Query = require('./Query.js');
var Results = require('./Results.js');
var Saved = require('./Saved.js');
var search = require('../utils/helpers.js');

var Parent = React.createClass({
	getInitialState: function(){
		return({
			query: {
				term: "",
				start: "",
				end: ""
			},
			lastQuery: {
				term: "",
				start: "",
				end: ""
			},
			results: [],
			saved: []
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
		if(this.state.query != this.state.lastQuery && this.state.query.term != ""){
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

			<div className="container-fluid">
				<div className="row">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<br />
							<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Article Search</strong></h1>
							<h3 className="text-center">Search for and save articles of interest.</h3>
							<br />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Query setQuery={this.setQuery} />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
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