import React from 'react'


class StopBlock extends React.Component {

	constructor(props) {
		super(props)

	}

	render() {
		return (
			<div className="col-md-3">
				<div className="card h-100 text-center shadow-sm">
					<div className="card-header">
						{this.props.stop}
					</div>
					<div className="card-body">
						<bold>Line:</bold> <p>{this.props.line}</p>
						<button className="btn btn-primary">
							Enter
						</button>
					</div>
					
				</div>
			</div>
		)
	}

	
}

export default StopBlock