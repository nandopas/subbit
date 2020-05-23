import React, { Component } from 'react';
import Posts from './Posts';

export class HomePage extends Component {

    state = {
        loading: true
    }

    render() {
    

        return (
            <div>
                <h4>Home Page: All Posts</h4>
                <Posts posts={this.props.posts} users={this.props.users} />
            </div>
        )
    }
}

export default HomePage
