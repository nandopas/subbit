import React, { Component } from 'react';
import Posts from './Posts';
import PropTypes from 'prop-types';
import axios from 'axios';

export class HomePage extends Component {

    state = {
        loading: true,
        posts: []
    }
    componentDidMount() {
        this.getPosts();
    }

    // request to get all posts and save to home page state
    getPosts() {
        axios.get('api/v1/posts')
        .then(response => {
            this.setState({ posts: response.data.reverse() })
        })
        .catch(error => console.log(error))
    }

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

    render() {
    

        return (
            <div>
                <h1>Most Recent Posts</h1>
                <Posts 
                    posts={this.state.posts} 
                    users={this.props.users} 
                    delete={this.delPost} 
                    current_user={this.props.current_user}
                    subway_stops={this.props.subway_stops}
                />
            </div>
        )
    }
}


// PropTypes
HomePage.propTypes = {
    //posts: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired
}

export default HomePage
