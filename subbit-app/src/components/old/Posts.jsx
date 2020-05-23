import React from 'react'
import axios from 'axios'

class Posts extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			posts: [],
			users: [],
			user: ''
		}
	}
	
	getPosts() {
		axios.get('api/v1/posts')
		.then(response => {
			this.setState( {posts: response.data} )
		})
		.catch(error => console.log(error))
	}

	getUsers() {
		axios.get('api/v1/users')
		.then(response => {
			this.setState( {users: response.data} )
		})
		.catch(error => console.log(error))
	}

	componentDidMount = () => {
		this.getPosts()
		this.getUsers()
	}

	fx() {
		this.state.users.map(user => (
				console.log(user.username)			

		))
	}


	render() {
		return (
			<div>
			
			{/*do this for each post*/}
			{this.state.posts.map(post => (
				
				<div className="card mb-3" key={post.id}>
					<div className="card-header">
						<strong>Posted by:</strong> {this.state.user}
						{/* go through each user to find match with post and set state to user */}
						{this.state.users.forEach((user) => {
							if (user.id === post.user_id) {
								this.state.user = user.username;
							}
						})}
					</div>
					<div className="card-body">
						<div className="row">
							<div className="col-xs-1 ml-3">
								{post.cached_weighted_score}
							</div>

							<div className="col-xs-11 ml-2">
								{post.topic}
							</div>
						</div>
						<div className="row">

							<div className="col-xs-1 ml-3">
							</div>

							<div className="col-xs-11 ml-3">
								<p className="card-text">
									<small className="text-muted">
										{post.created_at}
										//use https://www.npmjs.com/package/react-time-ago
									</small>
								</p>
							</div>
						</div>
						
					</div>
				</div>
			))}
			</div>
		);
	};

	
}

export default Posts