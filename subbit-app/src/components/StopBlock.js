import React from 'react'
import axios from 'axios'

class StopBlock extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			subway_stops: []
		}
	}
	
	
	render() {
		return (
			<div>
				<ul>
					{this.state.subway_stops.map((subway_stop) => {
						return(
							<li className="stop" subway_stop={subway_stop} key={subway_stop.id}>
								{subway_stop.id}
							</li>
						)
					})}
				</ul>
			</div>
		)
	}

	getSubwayStops() {
		axios.get('api/v1/subway_stops')
		.then(response => {
			this.setState( {todos: response.data} )
		})
		.catch(error => console.log(error))
	}

	componentDidMount() {
		this.getSubwayStops()
	}
}

export default StopBlock