import React from 'react'
import axios from 'axios'
import { 
	     Link 
} from 'react-router-dom';

class SideBar extends React.Component {

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
				
					<div className="card sticky-top">
						<div className="card-header">
							<h4>Subway Stops</h4>
						</div>
						<ul className="list-group list-group-flush">
					
							{this.state.subway_stops.map(subway_stop => (
								<Link to="/SubwayStopPage">
									<li className="list-group-item" key={subway_stop.id}>
										{subway_stop.stop}
									</li>
								</Link>
							))}
							
						</ul>
					</div>
				
			</div>
		)
	}
}

export default SideBar