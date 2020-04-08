import React from 'react';

class Counter extends React.Component {

	state = {
		count: 0,
		tags: ['tag1', 'tag2', 'tag3']
	};

	/*
	constructor() {
		super();
		this.handleIncrement = this.handleIncrement.bind(this);
	}
	*/

	handleIncrement = () => {
		console.log('Increment Clicked', this);
	}
	
	render() {

		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button 
					onClick={this.handleIncrement} 
					className="btn btn-secondary btn-sm"
				> 
					Increment 
				</button>
			</div>
		);
	}


	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += (this.state.count === 0) ? "warning" : "primary";
		return classes;
	}
}

export default Counter;