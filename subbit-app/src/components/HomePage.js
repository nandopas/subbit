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

    // request to get all posts and save to app state
    getPosts() {
        axios.get('api/v1/posts')
        .then(response => {
            this.setState({ posts: response.data.reverse() })
        })
        .catch(error => console.log(error))
    }

    render() {
    

        return (
            <div>
                <h1>Most Recent Posts</h1>
                <Posts posts={this.state.posts} users={this.props.users} />
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
