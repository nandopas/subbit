import React, { Component } from 'react'
import Post from './Post';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

export class Posts extends Component {
    
    // find the user that belongs to the post
    attachUserToPost = (post) => {
        const post_user = this.props.users.find(user => user.id === post.user_id);
        return post_user;
    };

    // find the subway stop that belongs to the post
    attachSubwayStopToPost = (post) => {
        const post_subway_stop = this.props.subway_stops.find(subway_stop => subway_stop.id === post.subway_stop_id);
        return post_subway_stop;
    };


    render() { 
        if (this.props.posts.length === 0) {
            return (
                <h2>No Posts to Show!</h2>
            )
        }
        return (
            <div>
                {this.props.posts.map(post => {
                    // get the associated user
                    let user = this.attachUserToPost(post);

                    // get the associated subway stop
                    let subway_stop = this.attachSubwayStopToPost(post);

                    // wait until previous two are defined
                    if (typeof user === 'undefined' || typeof subway_stop === 'undefined') return <Loader type="Oval" color="#00BFFF" />;

                    // finally return a post
                    return (
                        <Post 
                            post={post} 
                            key={post.id} 
                            user={user} 
                            delete={this.props.delete} 
                            current_user={this.props.current_user} 
                            subway_stop={subway_stop} 
                        />
                    );
                })}
            </div>
        )
    }
}

// PropTypes
Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    delete: PropTypes.func.isRequired,
    current_user: PropTypes.object.isRequired,
    subway_stops: PropTypes.array.isRequired
}

export default Posts
