import React, { Component } from 'react';
import axios from 'axios';

export class SignupPage extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
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
    	const {username, email, password, password_confirmation} = this.state

    	let user = {
	    	username: username,
	    	email: email,
	    	password: password,
	    	password_confirmation: password_confirmation
	    }

        {console.log("handleSubmit user:",user.username)}
        {console.log("handleSubmit pass:",user.password)}
        
    	axios.post('api/v1/users', {user}, {withCredentials: true})
    	.then(response => {
    		if (response.data.status === 'created') {
                {console.log('created')}
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

    redirect = () => {
        this.props.history.push('/')
    }

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
                    <h4 className="mb-0">Sign Up:</h4>
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
                        type="text"
                        name="email"
                        className="form-control mb-4" 
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                        
                        <input 
                        type="password"
                        name="password"
                        className="form-control mb-4" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                    
                        <input 
                        type="password"
                        name="password_confirmation"
                        className="form-control mb-1" 
                        placeholder="Password Confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.onChange}
                        />
                    

                        <button 
                        type="submit"
                        className="btn btn-block my-4"
                        placeholder="submit"
                        style={{ backgroundColor: "#52b788", color:"white"}}>
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

export default SignupPage
