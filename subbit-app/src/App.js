import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarPage from './components/NavbarPage.jsx';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SubwayStopPage from './components/SubwayStopPage';
import UserPage from './components/UserPage';

export class App extends Component {

    state = {
        isLoggedIn: false,
        users: [],
        subway_stops: [],
        posts: [],
        current_user: {},
        loading: true
    }

    // request to get all subwaystops and save to app state
    getSubwayStops() {
		axios.get('api/v1/subway_stops')
		.then(response => {
            this.setState( {subway_stops: response.data} )
            
		})
		.catch(error => console.log(error))
    }

    // request to get all posts and save to app state
    getPosts() {
        axios.get('api/v1/posts')
        .then(response => {
            this.setState({ posts: response.data })
        })
        .catch(error => console.log(error))
    }

    // request to get all users
    getUsers() {
        axios.get('api/v1/users')
        .then(response => {
            this.setState({ users: response.data })
        })
        .catch(error => console.log(error))
    }
    
    // request to check if user is logged in then log them in react
    loginStatus = () => {
        axios.get('api/v1/logged_in', 
        {withCredentials: true})
        .then(response => {
          if (response.data.logged_in) {
            console.log(response.data)
            this.handleLogin(response.data)
          } else {
            this.handleLogout()
          }
        })
        .catch(error => console.log('api errors:', error))
    }

    // sets the log in state of the app based on previous function request
    handleLogin = (data) => {
        this.setState({
          isLoggedIn: true,
          current_user: data.user
        })
    }

    handleLogout = () => {
        this.setState({
          isLoggedIn: false,
          current_user: {}
        })
    }

    // does the logout on the server, then calls react logout
    logout = () => {
        axios.delete('api/v1/logout',
        {withCredentials: true})
        .then(response => {
          this.handleLogout();
        })
        .catch(error => console.log(error));
    }

    // ensures requests are completed for necessary info before displaying to page
    // so components arent rendered without info
    componentDidMount() {
        console.log("loading subwaystops");
        this.getSubwayStops();
        console.log("loading posts");
        this.getPosts();
        console.log("loading users");
        this.getUsers();
        console.log("setting to true");
        this.setState({ loading: false })
        //this.loginStatus();
    }

    componentWillMount() {

    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    Loading
                </div>
            )
        }

        return (
            <Router>
            <div>
                <NavbarPage 
                    subway_stops={this.state.subway_stops} 
                    logout={this.handleLogout} 
                    isLoggedIn={this.state.isLoggedIn} 
                    current_user={this.state.current_user} 
                />

                <div style={{paddingTop: "100px"}}></div>

                <div className="container-fluid">

                    <p>Logged in as { this.state.isLoggedIn ? this.state.current_user.username : "not logged in" }</p>

                    <Switch>
                        <Route path="/login">
                            <LoginPage handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
                        </Route>

                        <Route path={"/subway_stop_page/:id"} component={SubwayStopPage} />
                        
                        <Route path={"/users/:id"} component={UserPage} />
                

                        <Route exact path="/">
                            <HomePage posts={this.state.posts} users={this.state.users} />
                        </Route>
                    </Switch>
                </div>
            </div>
            </Router>
        )
    }
}

export default App
