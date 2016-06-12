var React = require('react');
var helpers = require('../utils/helpers.js');

var Child = React.createClass({
	getInitialState: function(){
		return({
			saved: []
		})
	},
	componentDidUpdate: function(){
		if(this.props.saved.data != this.state.saved){
			this.setState({
				saved: this.props.saved.data
			})
		}
	},
	handleDelete: function(i){
		helpers.deleteArticle({_id: this.state.saved[i]._id}, function(){
			this.props.getNewSaved()
		}.bind(this))
	},
	render: function(){
		if(this.state.saved.length == undefined || this.state.saved.length == 0){
			return(
				<div>
					<h2> No Saved Articles </h2>
				</div>
			)
		} else {
			return(
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">Saved</h3>
					</div>
					<div className="panel-body text-center">
						<table className="table table-striped">
						<tbody>{this.state.saved.map(function(result, i){
							return (
								<tr key={i + 1000}>
									<td><h4><strong>{result.headline.main}</strong></h4></td>
									<td>{result.byline.original}</td>
									<td><a href={result.web_url}><button className="btn btn-primary"><i className="fa fa-newspaper-o"></i> Read</button></a></td>
									<td><button className="btn btn-danger" onClick={this.handleDelete.bind(null, i)}><span className="glyphicon glyphicon-trash"></span> Delete</button></td>
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