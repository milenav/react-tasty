import React, { useState, useContext, Fragment } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";

import AppContext from '../app/AppContext';

import '../navigation/Navigation.css'

const Navigation = () => {
    const [isOpened, setIsOpened] = useState(false);
    const toggleCollapse = () => setIsOpened(!isOpened);
    const appContext = useContext(AppContext);

    return (
        <MDBNavbar color="warning-color-dark" dark expand="md">
            <MDBNavbarBrand>
                <img src="https://assets.website-files.com/5d548291782f475092a9ed52/5d6ede434c483e311ac82c57_wordmark_256x256.png" className="img-fluid" alt={`Responsive`} style={{ maxWidth: "20%" }} />
            </MDBNavbarBrand>

            <MDBNavbarToggler onClick={toggleCollapse} />

            <MDBCollapse id="navbarCollapse3" isOpen={isOpened} navbar>
                <MDBNavbarNav right>
                    <MDBNavItem active>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>

                    {
                        appContext.isLoggedIn ? (
                            <Fragment>
                                <MDBNavItem>
                                    <MDBNavLink to="/restaurant">Restaurants</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink to="/create">New Restaurants</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink to="/" onClick={() => appContext.logoutUser()}>Logout</MDBNavLink>
                                </MDBNavItem>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <MDBNavItem>
                                    <MDBNavLink to="/register">Register</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink to="/login">Login</MDBNavLink>
                                </MDBNavItem>
                            </Fragment>
                        )
                    }

                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
};

export default Navigation;