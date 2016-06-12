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
	handleSave: function(event){
		helpers.addArticle(this.state.results[event.target.id], function(){
			this.props.getNewSaved();
		}.bind(this))
	},
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Results</h3>
				</div>
				<div className="panel-body text-center">
					<table className="table">
					<tbody>{this.state.results.map(function(result, i){
						return (
							<tr key={result._id}>
								<td>{i+1}.) </td>
								<td>{result.headline.main}</td>
								<td><button className="btn btn-info" id={i} onClick={this.handleSave}>Save</button></td>
							</tr>
						)
					}.bind(this))}</tbody>
					</table>
				</div>
			</div>
		)
	}
});

module.exports = Child;