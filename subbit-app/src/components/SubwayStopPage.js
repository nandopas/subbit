import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';
import PostCreate from './PostCreate';

// idk why but axios started requesting from the react url and not my proxy
// axios.defaults.baseURL = 'http://localhost:4000';

export class SubwayStopPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subway_stop: {},
            posts: []
        }
    }

    // after initial render, get data
    componentDidMount() {
        this.getData();
    }

    // this is used when the subway stop page has been changed to update the page contents
    // it compares to see if the url id is different from previous
    // if so, it will re fetch the subway stop data from new url
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getData();
        }
    }

    // calls subway stop from api
    getData() {

        // get the id of the subwaystop from the url as a string
        const id = this.props.match.params.id;

        // make call to appropriate subway stop
        axios.get(`api/v1/subway_stops/${id}`)
		.then(response => {
            // set subway stop
            this.setState({ subway_stop: response.data })
		})
        .catch(error => {
            console.log(error)
            this.redirect();
        })
        
        // make call to posts
        axios.get("api/v1/posts")
        .then(response => {
            // get a new array that only gets the posts from subway stop
            // then sorts them with sort posts function
            let posts = this.sortPosts(response.data.filter(post => post.subway_stop_id === Number(id)))
            // set the state
            this.setState({ posts: posts })
        })
        .catch(error => console.log(error))
    }

    // sort posts based on score
    sortPosts = (posts) => {
        return posts.sort((a,b) => b.cached_weighted_score - a.cached_weighted_score)
    }

    addPost = (topic) => {
        // make a post object with necessary details
    	let post = {
    		topic: topic,
            body: null,
            subway_stop_id: this.props.match.params.id,
            tags: null,
            score: null
    	}
        
        // post to api
    	axios.post('api/v1/posts', {post}, {withCredentials: true})
    	.then(response => {
            // push onto state
            this.setState({ posts: [...this.state.posts, response.data.post] })
    	})
        .catch(error => console.log('api errors:', error))
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

    // redirect home if stop not found
    redirect = () => {
        this.props.history.push('/')
    }

    render() {

        return (
            
            <div>
                <h1>{this.state.subway_stop.stop}</h1>

                {
                    this.props.isLoggedIn ?
                    <PostCreate subway_stop_id={this.props.match.params.id} addPost={this.addPost} /> :
                    <div> Log in to start posting!</div>
                }

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


export default SubwayStopPage


/*
        const id = Number(this.props.match.params.id)
        const current = this.props.subway_stops.find(subway_stop => subway_stop.id === id)

        return (
            <div>
                <h1>{current ? current.stop : <Loader type="Oval" color="#00BFFF" />}</h1>
                {this.props.isLoggedIn ? 
                <PostCreate subway_stop_id={id} current_user={this.props.current_user} subway_stop_id={id} />
                :
                <Link to="/login">Log In to Start Posting!</Link>
                }
                <PostsShow posts={this.props.posts} id={id} users={this.props.users}/>
            </div>
        )
*/