import React, { Component } from 'react'
import axios from 'axios';

export class LoginPage extends Component {

    // state here keeps track of changes to form
    state = {
        username: '',
        password: '',
        errors: ''
    }

    // changes form state
    onChange = (event) => {
	    const {name, value} = event.target
	    this.setState({
	      [name]: value
	    })
    };
      
    // submits to db
    onSubmit = (event) => {
    	event.preventDefault()
    	const {username, password} = this.state

        // create new user object with below specs
    	let user = {
    		username: username,
    		password: password
    	}
        
        // post to api
    	axios.post('api/v1/login', {user}, {withCredentials: true})
    	.then(response => {
    		if (response.data.logged_in) {
                // perform log in at app.js
                this.props.handleLogin(response.data)
                // redirect to home page
    			this.redirect()
    		} else {
    			this.setState({
    				errors :response.data.errors
    			})
    		}
    	})
    	.catch(error => console.log('api errors:', error))
    };

    // allows redirect to home page
    redirect = () => {
        this.props.history.push('/')
    }

    // returns the errors if any
    handleErrors = () => {
        return(
            <div>
                <ul>
                    {this.state.errors.map(error => {
                        return <li key={error}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className="card">
                <div className="card-header p-4" style={{ backgroundColor: "#52b788", color:"white" }}>
                    <h4 className="mb-0">Log In:</h4>
                </div>
                
                <div className="card-body p-4">
                    <form onSubmit={this.onSubmit} >
                        <input
                        type="text"
                        name="username"
                        className="form-control mb-4" 
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.onChange}
                        />
                    
                        <input 
                        type="password"
                        name="password"
                        className="form-control mb-1" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                    
                        <button 
                        type="submit"
                        className="btn btn-block my-4"
                        placeholder="submit" style={{ backgroundColor: "#52b788", color: "white" }}>
                            Submit
                        </button>
                    </form>
                    <div>
                        {
                            this.state.errors ? this.handleErrors() : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
