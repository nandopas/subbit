import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';
//import PostsShow from './PostsShow';
import PostCreate from './PostCreate';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

// idk why but axios started requesting from the react url and not my proxy
axios.defaults.baseURL = 'http://localhost:4000';

// const id = this.props.match.params.id;

export class SubwayStopPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            subway_stop: {}
        }
    }

    componentDidMount() {
        this.getSubwayStop();
    }

    // this is used when the subway stop page has been changed to update the page contents
    // it compares to see if the url id is different from previous
    // if so, it will re fetch the subway stop data from new url
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.subway_stop)
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getSubwayStop();
        }

    }

    getSubwayStop() {
        const id = this.props.match.params.id;
        axios.get(`api/v1/subway_stops/${id}`)
		.then(response => {
            this.setState( {subway_stop: response.data} )
            
		})
		.catch(error => console.log(error))
    }

    sortPosts = (posts) => {
        return posts.sort((a,b) => b.cached_weighted_score - a.cached_weighted_score)
    }

    render() {
        // sort posts by score
        // let posts = this.sortPosts(this.state.subway_stop.posts);

        return (
            
            <div>
                <h1>{this.state.subway_stop.stop}</h1>

                {
                    this.props.isLoggedIn ?
                    <PostCreate subway_stop_id={this.props.match.params.id} reload={this.getSubwayStop} /> :
                    <div> Log in to start posting!</div>
                }
                    
                {
                    typeof this.state.subway_stop.posts === 'undefined' ?
                    <div>loading</div> :
                    <Posts posts={this.sortPosts(this.state.subway_stop.posts)} users={this.props.users} />
                }
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