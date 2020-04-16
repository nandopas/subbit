import React from 'react'
import axios from 'axios'
import StopBlock from './StopBlock.jsx'

class StopsBlock extends React.Component {

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
			<h1> Subway Stops </h1>
			<div className="container">
			<div className="row">
				{this.state.subway_stops.map(subway_stop => (
					<StopBlock key={subway_stop.id} 
							   stop={subway_stop.stop} 
							   line={subway_stop.line} />
						
				))}			
			</div>
			</div>
			</div>
		);
	};

	
}

export default StopsBlock