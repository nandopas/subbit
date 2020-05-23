import React from 'react'


class AboutPage extends React.Component {

	render() {
		return (
			<div>
				<div className="card">
					<div className="card-header">
						<h1>What is Subbit?</h1>
					</div>
					<div className="card-body">
						<h1>Lost in New York?</h1>
						<hr />
						<h3>
							Ever step out of a subway station and dont know what to do?
						</h3>

							<p>
								Go on subbit and search the feed for any subway 
								station filled with user generated posts of whats going on.
							</p>
						<h3>
							Vote for your favorites!
						</h3>
							<p>
								Good posts get upvoted to the top of the page and bad posts sink down 
								to the bottom, allowing for a fully user oriented experience to discover 
								more about your neighborhood or a new stop.
							</p>
					</div>
				</div>
				
			</div>
		)
	}

	
}

export default AboutPage