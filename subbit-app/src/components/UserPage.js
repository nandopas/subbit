import React, { Component } from 'react'
import axios from 'axios';
import Posts from './Posts';
import Loader from 'react-loader-spinner';

// idk why but axios started requesting from the react url and not my proxy
axios.defaults.baseURL = 'http://localhost:4000';

export class UserPage extends Component {

    state = {
        user: {},
        loading: true
    }

    componentDidMount() {
        this.getUser();
        //this.setState({ loading: false });
    }

    getUser() {
        const id = this.props.match.params.id;
        axios.get(`api/v1/users/${id}`)
		.then(response => {
            this.setState( {user: response.data} )
            
		})
		.catch(error => console.log(error))
    }


    render() {
      
        return (
            <div>
                <h1>{this.state.user.username} posts</h1>
                {
                    typeof this.state.user.posts === 'undefined' ? 
                    <Loader type="Oval" color="#00BFFF" /> : 
                    <Posts posts={this.state.user.posts} users={this.props.users} />
                }
                
            </div>
        )
    }
}

export default UserPage
