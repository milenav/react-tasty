import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Login = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center my-4">Login</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
            />
            
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text mt-4">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <MDBBtn className="white-text" color="default" type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;