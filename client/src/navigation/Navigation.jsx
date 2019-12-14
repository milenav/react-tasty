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
          <MDBNavbar color="warning-color-dark" dark expand="md">
              <MDBNavbarBrand>
              <img src="https://assets.website-files.com/5d548291782f475092a9ed52/5d6ede434c483e311ac82c57_wordmark_256x256.png" className="img-fluid" alt={`Responsive`} style={{ maxWidth: "20%" }}/>
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
                          <MDBNavLink to="*">Logout</MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                          <MDBNavLink to="/restaurant">Restaurants</MDBNavLink>
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