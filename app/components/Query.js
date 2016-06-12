var React = require('react');

var Child = React.createClass({
	getInitialState: function(){
		return ({
			term: "",
			start: "",
			end: ""
		})
		
	},
	handleChange: function(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},
	submitChanges: function(){
		this.props.setQuery({
			term: this.state.term,
			start: this.state.start,
			end: this.state.end
		})
	},
	render: function(){

		return(

			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Search</h3>
				</div>
				<div className="panel-body text-center">
					<div className="form-group">
						<h4 className="pull-left"><strong>Term</strong></h4>
						<input type="text" value={this.state.term} className="form-control" id="term" onChange={this.handleChange} />
						<h4 className="pull-left"><strong>Start Year</strong></h4>
						<input type="text" value={this.state.start} className="form-control" id="start" onChange={this.handleChange} />
						<h4 className="pull-left"><strong>End Year</strong></h4>
						<input type="text" value={this.state.end} className="form-control" id="end" onChange={this.handleChange} />
					</div>
					<button type="submit" onClick={this.submitChanges} className="btn btn-danger pull-right"><span className="glyphicon glyphicon-search"></span> Search</button>
				</div>
			</div>
		)
	}
});

module.exports = Child;