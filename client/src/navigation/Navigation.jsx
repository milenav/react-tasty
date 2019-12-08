import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

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
          <MDBNavbar color="peach-gradient" dark expand="md">
              <MDBNavbarBrand>
              <img src="https://i1.wp.com/www.equallyours.org.uk/wp-content/uploads/2012/04/edf-logo.png?fit=50%2C50&ssl=1" className="img-responsive" alt={`Responsive`}/>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                  <MDBNavbarNav right>
                      <MDBNavItem active>
                          <MDBNavLink to="/">Home</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                          <MDBNavLink to="/register">Register</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                          <MDBNavLink to="/login">Login</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                          <MDBNavLink to="#!">Logout</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                          <MDBNavLink to="/restaurants">Restaurants</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                          <MDBNavLink to="/create">New Restaurants</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                      </MDBNavItem>
                  </MDBNavbarNav>
              </MDBCollapse>
          </MDBNavbar>

    );
  }
}

export default Navigation;