import React, { Component } from 'react';
import ReactTimeAgo from 'react-time-ago';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Post extends Component {

    upVote = () => {
        //const id = this.props.post.id.toString();
        console.log("up vote")
        let { post } = this.props
        axios.put(`api/v1/posts/${post.id.toString()}/like`, {post}, {withCredentials: true})
        .then(response => {
            console.log("went through down vote")
        })
    }

    downVote = () => {
        //const id = this.props.post.id.toString();
        console.log("down vote")
        let { post } = this.props
        axios.put(`api/v1/posts/${post.id.toString()}/dislike`, {post}, {withCredentials: true})
        .then(response => {
            console.log("went through down vote")
        })
    }

    render() {
        {console.log(this.props)}
        return (
            
            <div className="card mb-3">
                <div className="card-body">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-2">
                            <div className="row">
                                <button 
                                    onClick={this.upVote} 
                                    className="btn btn-sm w-100 p-1"
                                    placeholder="up"
                                >
                                    UpVote
                                </button>
                            </div>
                            <div className="row">
                                <button 
                                    onClick={this.downVote} 
                                    className="btn btn-sm w-100 p-1"
                                    placeholder="down"
                                >
                                    DownVote
                                </button>
                            </div>
                        </div>
                        <div className="col-10">
                            <h5 className="card-title mb-0">{this.props.post.topic}</h5>
                        </div>
                        </div>
                    </div>
                </div>
    
                <div className="rounded-bottom lighten-3 text-center pt-3" style={{backgroundColor: '#52b788'}}>
                    <ul className="list-unstyled list-inline font-small">
                        <li className="list-inline-item pr-2 white-text">Posted By: {this.props.user.username} </li>
                        <li className="list-inline-item pr-2 white-text"><i className="far fa-clock pr-1"></i><ReactTimeAgo date={this.props.post.created_at}/></li>
                        <li className="list-inline-item pr-2"><a href="#" className="white-text">Score: {this.props.post.cached_weighted_score}</a></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Post
