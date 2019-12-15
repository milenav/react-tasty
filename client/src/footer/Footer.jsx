import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="warning-color-dark" className="font-small footer-copyright text-center font-small mt-5 py-3" >
 
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <span> Milena Valcheva </span>
        </MDBContainer>
     
    </MDBFooter>
  );
}

export default Footer;