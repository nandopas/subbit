import React from 'react'

class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}

export default Welcome