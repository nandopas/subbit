import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class SideBar extends Component {
    render() {
        return (
            <div>
                <div className="card sticky-top">

					<div className="card-header" style={{ backgroundColor: "#52b788", color: "white" }}>
						<h5 className="mb-0">Subway Stops</h5>
					</div>

					<ul className="list-group list-group-flush">
						{this.props.subway_stops.map(subway_stop => (
							<Link to={`/subway_stop_page/${subway_stop.id}`} key={subway_stop.id} >
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

// PropTypes
SideBar.propTypes = {
    subway_stops: PropTypes.array.isRequired
}

export default SideBar
