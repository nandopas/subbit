import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import LoginForm from './LoginForm.jsx'
import axios from 'axios';

class LoginPage extends Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	      username: '',
	      password: '',
	      errors: ''
	     };
	  }

	handleChange = (event) => {
		{console.log("change event")}
		{console.log(event.target.value)}
	    const {name, value} = event.target
	    this.setState({
	      [name]: value
	    })
	  };

	handleSubmit = (event) => {
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
	    		{console.log("loggedin")}
	    		this.props.handleLogin(response.data)
	    		this.redirect()
	    	} else {
	    		{console.log("not loggedin")}
	    		{console.log("debug", response.data)}
	    		this.setState({
	    			errors: response.data.errors
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
    	<div className="card p-4">
    		
    		<h4>Log In:</h4>
    		<div>
	  		<form onSubmit={this.handleSubmit}>
	  			
     			<input 
     				type="text" 
     			    name="username" 
     			    className="form-control mb-1" 
     		   	    placeholder="Username"
     			 	value={this.state.username}
     			 	onChange={this.handleChange} />

  				<br />
  				<input 
  					type="password" 
  					name="password" 
  					className="form-control mb-2" 
  					placeholder="Password"
  					value={this.state.password}
  					onChange={this.handleChange} />

  				<button className="btn btn-primary" placeholder="submit" type="submit">
            		Log In
            	</button> 
    			

	  		</form>

	  		<div>
	  			{
	  				this.state.errors ? this.handleErrors() : null
	  			}
	  		</div>
	  		
	  	</div>
    	</div>
    );
  }
}

export default LoginPage;