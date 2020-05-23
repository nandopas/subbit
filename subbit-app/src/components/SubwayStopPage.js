import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';

// idk why but axios started requesting from the react url and not my proxy
axios.defaults.baseURL = 'http://localhost:4000';

export class SubwayStopPage extends Component {

    state = {
        subway_stop: [],
        posts: []
    };

    // get the specific subway stop based on id in url
    // get url from route props
    getSubwayStop() {
        const id = this.props.match.params.id;
        axios.get(`api/v1/subway_stops/${id}`)
		.then(response => {
            this.setState( {subway_stop: response.data} )
            
		})
		.catch(error => console.log(error))
    }

    // get the posts related to this subway stop
    getPosts() {
        const id = this.props.match.params.id;
        axios.get(`api/v1/subway_stops/${id}/posts`)
		.then(response => {
            this.setState( {posts: response.data} )
            
		})
		.catch(error => console.log(error))
    }

    componentDidMount() {
        this.getSubwayStop();
        this.getPosts();
    }

    render() {
       
        return (
            <div>
                {console.log(this.props)}
                {console.log(this.state.subway_stop)}
                <h1>Subway stop page</h1>
                <h2>{this.state.subway_stop.stop}</h2>

                {/* use a post container here */}

                <Posts posts={this.state.posts}/>
            </div>
        )
    }
}

export default SubwayStopPage
