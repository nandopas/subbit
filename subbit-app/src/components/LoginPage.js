import React, { Component } from 'react'
import axios from 'axios';

export class LoginPage extends Component {

    state = {
        username: '',
        password: ''
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
    	const {username, password} = this.state

    	let user = {
    		username: username,
    		password: password
    	}

        {console.log("handleSubmit user:",user.username)}
        {console.log("handleSubmit pass:",user.password)}
        
    	axios.post('api/v1/login', {user}, {withCredentials: true})
    	.then(response => {
    		if (response.data.logged_in) {
    			this.props.handleLogin(response.data)
    			this.redirect()
    		} else {
    			this.setState({
    				errors :response.data.errors
    			})
    		}
    	})
    	.catch(error => console.log('api errors:', error))
  	};

    render() {
        return (
            <div className="card p-4">
                <h4>Log In:</h4>
                <form onSubmit={this.onSubmit} >
                    <input
                    type="text"
                    name="username"
                    className="form-control mb-1" 
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.onChange}
                    />
                    <br />
                    <input 
                    type="password"
                    name="password"
                    className="form-control mb-2" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                    />

                    <button 
                    type="submit"
                    placeholder="submit">
                        Submit
                    </button>
                    
                    
                   
                </form>
            </div>
        )
    }
}

export default LoginPage
