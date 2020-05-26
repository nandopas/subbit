import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
// import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
//import { Route } from "react-router-dom";
//import SubwayStopPage from './SubwayStopPage';

import { Link } from 'react-router-dom';

class NavbarPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      collapseID: "",
      modal: false
    };
  }


  componentDidMount() {
    
  }


  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

render() {
  const bg = {backgroundColor: "#40916c"}
  return (
    
      <div>
        <MDBNavbar scrolling fixed="top" style={bg} dark expand="md" >

          <Link to="/">
          <MDBNavbarBrand>
            <strong className="white-text">Subbit</strong>
          </MDBNavbarBrand>
          </Link>

          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />

          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/about">About</MDBNavLink>
              </MDBNavItem>

              
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-md-inline">Subway Stops</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right>

                    {this.props.subway_stops.map(subway_stop => ( 
                      <Link to={`/subway_stop_page/${subway_stop.id}`}><MDBDropdownItem key={subway_stop.id}>{subway_stop.stop}</MDBDropdownItem></Link>
                    ))}

                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            
              
            </MDBNavbarNav>

            <MDBNavbarNav right>
              {
              this.props.isLoggedIn ?
              <>
              <MDBNavItem>
                <MDBNavLink to="/" onClick={this.props.logout}>Log Out!</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to={`/users/${this.props.current_user.id}`}>{this.props.current_user.username}</MDBNavLink>
              </MDBNavItem>
              </>
              : 
              <>
              <MDBNavItem>
                <MDBNavLink to="/signup">Sign Up!</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/login">Log In!</MDBNavLink>
              </MDBNavItem>
              </>
              }
            </MDBNavbarNav>

          </MDBCollapse>
        </MDBNavbar>      

        
   
    </div>
    );
  }
}

export default NavbarPage;