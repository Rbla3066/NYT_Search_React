var React = require('react');
var helpers = require('../utils/helpers.js');


var Child = React.createClass({
	getInitialState: function(){
		return({
			results: this.props.res
		})
	},
	componentDidUpdate: function(){
		if(this.props.res != this.state.results){
			this.setState({
				results: this.props.res
			})
		}
	},
	handleSave: function(i){
		if(this.state.results[i]){
			helpers.addArticle(this.state.results[i], function(){
				this.props.getNewSaved();
			}.bind(this))
		}
	},
	render: function(){
		if(this.state.results.length == undefined  || this.state.results.length == 0){
			return(
				<div>
					<h3>Enter Search Terms to begin, or check out these saved articles... </h3>
					<br />
				</div>
			)
		} else {
			return(
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Results</h3>
					</div>
					<div className="panel-body text-center">
						<table className="table">
						<tbody>{this.state.results.map(function(result, i){
							return (
								<tr key={result._id}>
									<td><h4><strong>{result.headline.main}</strong></h4></td>
									<td>{result.byline.original}</td>
									<td><a href={result.web_url}><button className="btn btn-primary"><i className="fa fa-newspaper-o"></i> Read</button></a></td>
									<td><button className="btn btn-danger" onClick={this.handleSave.bind(null, i)}><span className="glyphicon glyphicon-download-alt"></span> Save</button></td>
								</tr>
							)
						}.bind(this))}</tbody>
						</table>
					</div>
				</div>
			)
		}
	}
});

module.exports = Child;