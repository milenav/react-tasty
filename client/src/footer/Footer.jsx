import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="warning-color-dark" className="font-small mt-5">
 
      <div className="footer-copyright text-center font-small mt-5 py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <span> Milena Valcheva </span>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;