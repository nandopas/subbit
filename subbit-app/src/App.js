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
import SignupPage from './components/SignupPage';
import SubwayStopPage from './components/SubwayStopPage';
import UserPage from './components/UserPage';
import SideBar from './components/SideBar';

export class App extends Component {

    state = {
        isLoggedIn: false,
        users: [],
        subway_stops: [],
        posts: [],
        current_user: {}
        //loading: false
    }

    // ensures requests are completed for necessary info before displaying to page
    // so components arent rendered without info
    componentDidMount() {
        this.getSubwayStops();
        this.getPosts();
        this.getUsers();
        this.loginStatus();
        //this.setState({ loading: false })
        //this.loginStatus();
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
                    logout={this.logout} 
                    isLoggedIn={this.state.isLoggedIn} 
                    current_user={this.state.current_user} 
                />
                
                <div style={{paddingTop: "100px"}}></div>

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-3 d-none d-lg-block">
                            <SideBar subway_stops={this.state.subway_stops} />
                        </div>
                        <div className="col-12 col-lg-6">
    
                        <Switch>
                            <Route path="/login" render={(props) => (
                                <LoginPage {...props} 
                                handleLogin={this.handleLogin} 
                                loggedInStatus={this.state.isLoggedIn} 
                                /> 
                            )} />
                                
                            <Route path="/signup" render={(props) => (
                                <SignupPage {...props} 
                                handleLogin={this.handleLogin} 
                                loggedInStatus={this.state.isLoggedIn}
                                />
                            )} />
                                

                            <Route path={"/subway_stop_page/:id"} render={(props) => (
                                <SubwayStopPage {...props} 
                                subway_stops={this.state.subway_stops} 
                                users={this.state.users} 
                                posts={this.state.posts} 
                                current_user={this.state.current_user} 
                                isLoggedIn={this.state.isLoggedIn} 
                                />
                            )} />
                            
                            <Route path={"/users/:id"} render={(props) => (
                                <UserPage {...props} 
                                users={this.state.users} 
                                posts={this.state.posts} 
                                />
                            )} />
                    
                            <Route exact path="/">
                                <HomePage posts={this.state.posts} users={this.state.users} />
                            </Route>
                        </Switch>

                        </div>
                    </div>
                </div>
                
            </div>
            </Router>
        )
    }
}

export default App
