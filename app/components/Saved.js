var React = require('react');
var helpers = require('../utils/helpers.js');

var Child = React.createClass({
	getInitialState: function(){
		return({
			saved: [{headline: {main: "No Saved Articles"}}]
		})
	},
	componentDidUpdate: function(){
		if(this.props.saved.data != this.state.saved){
			this.setState({
				saved: this.props.saved.data
			})
		}
	},
	handleDelete: function(event){
		helpers.deleteArticle({_id: this.state.saved[event.target.id]._id}, function(){
			this.props.getNewSaved()
		}.bind(this))
	},
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Saved</h3>
				</div>
				<div className="panel-body text-center">
					<table className="table">
					<tbody>{this.state.saved.map(function(result, i){
						return (
							<tr key={i + 1000}>
								<td>{i+1}.) </td>
								<td>{result.headline.main}</td>
								<td><button className="btn btn-info" id={i} onClick={this.handleDelete}>Delete</button></td>
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