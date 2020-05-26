import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PostCreate extends Component {

    state = {
        topic: '',
        errors: ''
    }

    onChange = (event) => {
        const {name, value} = event.target
	    this.setState({
	      [name]: value
	    })
    };

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addPost(this.state.topic)
        this.setState({ topic: '' })
    };
    
    render() {
        console.log(this.props)
        return (
            <div className="card p-4 mb-4">
                <form onSubmit={this.onSubmit} >
                    <input
                    type="text"
                    name="topic"
                    className="form-control" 
                    placeholder="What's Up?"
                    value={this.state.topic}
                    onChange={this.onChange}
                    />
                    {/* using this to display characters left */}
                    {
                        this.state.topic.length < 140 ?
                        140 - this.state.topic.length :
                        0
                    }/140 <br />
                    
                    {/* warning displayed if input text is too long */}
                    {
                        this.state.topic.length > 140 ? <p>Post is too long!</p> : null
                    }
                                          
                    <button 
                    type="submit"
                    className="btn btn-block"
                    placeholder="submit"
                    style={{ backgroundColor: "#52b788", color: "white" }}
                    hidden={this.state.topic.length > 140 || this.state.topic.length === 0} >
                        Post!
                    </button>           
                </form>

            </div>
        )
    }
}

// PropTypes
PostCreate.propTypes = {
    // need the subway stop id
    subway_stop_id: PropTypes.string.isRequired
}

export default PostCreate
