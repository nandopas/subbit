import React, { Component } from 'react'
import axios from 'axios';
import Posts from './Posts';

// idk why but axios started requesting from the react url and not my proxy
axios.defaults.baseURL = 'http://localhost:4000';

export class UserPage extends Component {

    state = {
        user: {},
        posts: []
    }

    getUser() {
        const id = this.props.match.params.id;
        axios.get(`api/v1/users/${id}`)
		.then(response => {
            this.setState( {user: response.data} )
            
		})
		.catch(error => console.log(error))
    }

    // get the posts related to this User
    getPosts() {
        const id = this.props.match.params.id;
        axios.get(`api/v1/users/${id}/posts`)
		.then(response => {
            this.setState( {posts: response.data} )
            
		})
		.catch(error => console.log(error))
    }

    componentDidMount() {
        this.getUser();
        this.getPosts();
    }

    render() {
        return (
            <div>
                <h1>User Page For</h1>
                <h2>{this.state.user.username}</h2>
                <Posts posts={this.state.posts}/>
                
            </div>
        )
    }
}

export default UserPage
