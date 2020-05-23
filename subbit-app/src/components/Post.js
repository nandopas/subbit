import React, { Component } from 'react'
import ReactTimeAgo from 'react-time-ago'

export class Post extends Component {

    
    

    render() {
       
        
        return (
            
            <div className="card mb-3">
                <div className="card-body">
                    <h4 className="card-title">{this.props.post.topic}</h4>
                </div>
    
                <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
                    <ul className="list-unstyled list-inline font-small">
                        <li className="list-inline-item pr-2 white-text">Posted By: {this.props.user.username} </li>
                        <li className="list-inline-item pr-2 white-text"><i className="far fa-clock pr-1"></i>05/10/2015</li>
                        <li className="list-inline-item pr-2"><a href="#" className="white-text"><i
                                className="far fa-comments pr-1"></i>12</a></li>
                        <li className="list-inline-item pr-2"><a href="#" className="white-text"><i className="fab fa-facebook-f pr-1">
                            </i>21</a></li>
                        <li className="list-inline-item"><a href="#" className="white-text"><i className="fab fa-twitter pr-1"> </i>5</a></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Post
