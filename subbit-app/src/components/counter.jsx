import React from 'react';

class Counter extends React.Component {

	state  = {
		value: this.props.value
	};

	handleIncrement = product => {
		console.log(product);
		this.setState({ value: this.state.value + 1 });
	};


	render() {
		console.log(this.props);

		return (
			<div>
				{this.props.children}
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>

				<button 
					onClick={ () => this.handleIncrement({ id: 1 }) }
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "btn m-2 btn-sm btn-";
		classes += this.state.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		return this.state.value === 0 ? 'Zero' : this.state.value;
	}

	
}

export default Counter;