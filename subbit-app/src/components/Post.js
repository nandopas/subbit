import React, { Component } from 'react';
import ReactTimeAgo from 'react-time-ago';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

export class Post extends Component {

   
    upVote = () => {
        //const id = this.props.post.id.toString();
        console.log("up vote")
        let { post } = this.props
        axios.put(`api/v1/posts/${post.id.toString()}/like`, {post}, {withCredentials: true})
        .then(response => {
            console.log("went through up vote")
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
                                    style={{ backgroundColor: "#95d5b2", color: "white" }}
                                >
                                    UpVote
                                </button>
                            </div>
                            <div className="row">
                                <button 
                                    onClick={this.downVote} 
                                    className="btn btn-sm w-100 p-1"
                                    placeholder="down"
                                    style={{ backgroundColor: "#c44536", color: "white" }}
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
                        <li className="list-inline-item pr-2 white-text">
                            Posted By {this.props.user.username}
                        </li>
                        <li className="list-inline-item pr-2 white-text">
                            <Link to={`/subway_stop_page/${this.props.subway_stop.id}`} style={{ color: "white" }}>
                                {this.props.subway_stop.stop}
                            </Link>
                        </li>
                        <li className="list-inline-item pr-2 white-text">
                            <ReactTimeAgo date={this.props.post.created_at}/>
                        </li>
                        <li className="list-inline-item pr-2 white-text">
                            Score: {this.props.post.cached_weighted_score}
                        </li>
                        {/*<li className="list-inline-item pr-2"><Link to={`/posts/${this.props.post.id.toString()}`}>Go to</Link></li>*/}
                        { 
                            // this checks to see if logged in user matches post user
                            // to allow for deleting
                            (this.props.current_user.id === this.props.user.id) ?
                            <li className="list-inline-item pr-2 white-text" 
                                style={{ cursor: "pointer "}}
                                onClick={this.props.delete.bind(this, this.props.post.id)}>Delete
                            </li> : null
                        }
                    </ul>
                </div>
                
            </div>
        )
    }
}

// PropTypes
Post.propTypes = {
    post: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    delete: PropTypes.func.isRequired,
    current_user: PropTypes.object.isRequired,
    subway_stop: PropTypes.object.isRequired
}

export default Post

