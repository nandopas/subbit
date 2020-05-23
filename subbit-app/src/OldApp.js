import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.jsx'
import NavbarPage from './components/NavbarPage.jsx'
import HomePage from './components/HomePage.jsx'
import AboutPage from './components/AboutPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import SignupPage from './components/SignupPage.jsx'
import SubwayStopPage from './components/SubwayStopPage.jsx'
import SideBar from './components/SideBar.jsx'
import LoginModal from './components/LoginModal.jsx'


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  componentDidMount() {
    console.log("hello")
    //console.log(this.state.user);
    this.loginStatus()
  }

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

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  handleClick = () => {
    axios.delete('api/v1/logout',
    {withCredentials: true})
    .then(response => {
      this.handleLogout();
    })
    .catch(error => console.log(error));
  }

  

  render () {

    return (

        <Router>

          <NavbarPage handleClick = {this.handleClick} isLoggedIn = {this.state.isLoggedIn} /> 

          <div style={{paddingTop: "100px"}}>

          </div>
        
          <div className="container-fluid">
          {
            <p>{this.state.isLoggedIn ? "logged in as " + this.state.user.username : "not logged in"}</p>
            
          }
          
            <div className="row">
              {console.log(this.state.isLoggedIn)}
              {console.log(this.state.user)}

              <div className="col-md-3 d-none d-md-block">
                <SideBar />
              </div>
              <div className="col-md-6 col-sm-12">
                <Switch>

                  <Route path="/about">
                    <AboutPage />
                  </Route>

                  <Route path="/SubwayStopPage">
                    <SubwayStopPage />
                  </Route>

                  <Route path="/login">
                    <LoginPage handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                  </Route>

                  <Route path="/signup">
                    <SignupPage handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                  </Route>

                  <Route exact path="/">
                    <HomePage />
                  </Route>

                  

                </Switch>
              </div>
            </div>
          </div>

          

        </Router>

        
        

    );
  }
}

export default App;
