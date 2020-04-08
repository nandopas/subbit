import React from 'react'
import axios from 'axios'

class StopBlock extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			subway_stops: []
		}
	}
	
	getSubwayStops() {
		axios.get('api/v1/subway_stops')
		.then(response => {
			this.setState( {subway_stops: response.data} )
		})
		.catch(error => console.log(error))
	}

	componentDidMount() {
		this.getSubwayStops()
	}

	render() {
		return (
			<div>
				<h1> hello there </h1>
				<ul>
					{this.state.subway_stops.map((subway_stop) => {
						return(
							<div className="container">
							<div className="col sm-3">
							<div className="card">
							<li className="stop" subway_stop={subway_stop} key={subway_stop.id}>
								{subway_stop.stop}
							</li>
							</div>
							</div>
							</div>
						)
					})}
				</ul>
			</div>
		)
	}

	
}

export default StopBlock