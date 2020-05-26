import React, { Component } from 'react';
import axios from 'axios';

export class PostCreate extends Component {

    state = {
        topic: '',
        errors: ''
    }

    onChange = (event) => {
        {console.log("change event")}
        {console.log(event.target.name)}
		{console.log(event.target.value)}
        const {name, value} = event.target
	    this.setState({
	      [name]: value
	    })
    };

    onSubmit = (event) => {
    	event.preventDefault()
    	const { topic } = this.state

    	let post = {
    		topic: topic,
            body: null,
            subway_stop_id: this.props.subway_stop_id, //do this!!!!!!!!!!!!!
            tags: null,
            score: null
    	}
        
    	axios.post('api/v1/posts', {post}, {withCredentials: true})
    	.then(response => {
            console.log(response)
            this.setState({ topic: '' })
    	})
    	.catch(error => console.log('api errors:', error))
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

                    {
                        this.state.topic.length < 140 ?
                        140 - this.state.topic.length :
                        0
                    }/140 <br />

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

export default PostCreate
