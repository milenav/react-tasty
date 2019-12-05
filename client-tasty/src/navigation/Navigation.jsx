import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import '../navigation/Navigation.css'

class Navigation extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <Router>
          <MDBNavbar color="amber darken-3" dark expand="md">
              <MDBNavbarBrand>
                  <strong className="white-text">Tasty</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                  <MDBNavbarNav right>
                      <MDBNavItem active>
                          <MDBNavLink to="#!">Home</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                          <MDBNavLink to="#!">Register</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                          <MDBNavLink to="#!">Login</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                          <MDBNavLink to="#!">Logout</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                      </MDBNavItem>
                  </MDBNavbarNav>
              </MDBCollapse>
          </MDBNavbar>
      </Router>
    );
  }
}

export default Navigation;