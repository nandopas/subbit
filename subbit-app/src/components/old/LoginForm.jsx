import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
			errors: ''
		};
	}

	handleChange = (event) => {
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
	  	<div>
	  		<form onSubmit={this.handleSubmit}>
	  			
     			<input 
     				type="text" 
     			    name="Username" 
     			    className="form-control mb-1" 
     		   	    placeholder="Username"
     			 	value={this.state.username}
     			 	onChange={this.handleChange} />

  				<br />
  				<input 
  					type="password" 
  					name="Password" 
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
    
      );
    }
}

export default LoginForm;