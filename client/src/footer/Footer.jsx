import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small mt-4 fixed-bottom">

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Milena Valcheva 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;