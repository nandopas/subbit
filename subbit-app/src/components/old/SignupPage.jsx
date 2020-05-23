import React, { Component } from 'react';
import axios from 'axios';

class SignupPage extends Component {

	constructor(props) {
	    super(props);
	    this.state = { 
	      username: '',
	      email: '',
	      password: '',
	      password_confirmation: '',
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
	    const {username, email, password, password_confirmation} = this.state

	    let user = {
	    	username: username,
	    	email: email,
	    	password: password,
	    	password_confirmation: password_confirmation
	    }

	    {console.log("handleSubmit pass:",user.password)}

	    axios.post('api/v1/users', {user}, {withCredentials: true})
	    .then(response => {
	    	if (response.data.status === 'created') {
	    		{console.log("signed up")}
	    		this.props.handleLogin(response.data)
	    		this.redirect()
	    	} else {
	    		{console.log("not signed up")}
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
    		
    		<h4>Sign Up:</h4>
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
     				type="text" 
     			    name="email" 
     			    className="form-control mb-1" 
     		   	    placeholder="Email"
     			 	value={this.state.email}
     			 	onChange={this.handleChange} />

  				<br />
  				<input 
  					type="password" 
  					name="password" 
  					className="form-control mb-1" 
  					placeholder="Password"
  					value={this.state.password}
  					onChange={this.handleChange} />
  				<br />
  				<input 
     				type="password" 
     			    name="password_confirmation" 
     			    className="form-control mb-2" 
     		   	    placeholder="Confirm Password"
     			 	value={this.state.password_confirmation}
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

export default SignupPage;