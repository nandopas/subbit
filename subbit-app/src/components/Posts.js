import React, { Component } from 'react'
import Post from './Post';

export class Posts extends Component {
    

    attachUserToPost = (post) => {
        const post_user = this.props.users.find(user => user.id === post.user_id);
        //console.log(post_user);
        return post_user;
    };

 
    

    render() {
        

        return (
            <div>
                
                {this.props.posts.map(post => {
                    let user = this.attachUserToPost(post);
                    if (typeof user === 'undefined') return <div>Loading</div>;
                    return <Post post={post} key={post.id} user={user} />
                })}
            </div>
        )
    }
}

export default Posts
