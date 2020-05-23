import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import LoginForm from './LoginForm.jsx'

class LoginModal extends Component {
state={
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="md">
        <MDBModalHeader toggle={this.toggle}>Log In</MDBModalHeader>
        <MDBModalBody>
        
          <LoginForm />
        </MDBModalBody>
        <MDBModalFooter>
          
          <MDBBtn placeholder="submit"
          		  color="primary"
          		  type="submit">Log In!</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default LoginModal;