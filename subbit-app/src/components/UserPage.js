import React, { Component } from 'react'
import axios from 'axios';
import Posts from './Posts';
import Loader from 'react-loader-spinner';

// idk why but axios started requesting from the react url and not my proxy
axios.defaults.baseURL = 'http://localhost:4000';

export class UserPage extends Component {

    state = {
        user: {},
        posts: [],
        loading: true,
        errors: ''
    }

    componentDidMount() {
        this.getUser();
        //this.setState({ loading: false });
    }

    getUser() {
        const id = this.props.match.params.id;
        axios.get(`api/v1/users/${id}`)
		.then(response => {
            console.log(response.data.posts)
            this.setState({ 
                user: response.data,
                posts: response.data.posts
            })
            
		})
		.catch(error => {
            console.log(error)
            // redirect to sign up if user not found
            this.redirect();
        })
    }

    // deletes a post
    delPost = (id) => {
        axios.delete(`api/v1/posts/${id}`)
        .then(response => {
            console.log(response)
            this.setState({ 
                posts: [...this.state.posts.filter(post => post.id !== id)]
            })
        })
        .catch(error => console.log('api errors:', error))
    }

    redirect = () => {
        this.props.history.push('/signup')
    }



    render() {
      
        return (
           
            <div>
                <h1>{this.state.user.username} posts</h1>
                {
                    typeof this.state.user.posts === 'undefined' ? 
                    <Loader type="Oval" color="#00BFFF" /> : 
                    <Posts 
                        posts={this.state.posts} 
                        users={this.props.users} 
                        current_user={this.props.current_user}
                        subway_stops={this.props.subway_stops}
                        delete={this.delPost}
                    />
                }
                
            </div>
        )
    }
}

export default UserPage
