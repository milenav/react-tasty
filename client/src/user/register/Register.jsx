import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault()
    
    if(email === '') {
      setError("Email is not valid!")
    } else {
      setError(null)
    }
    console.log({email, password})
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleSubmit}>
            <p className="h4 text-center my-4">Register</p>
            <label htmlFor="defaultFormRegisterEmail" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmail"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            
            <label htmlFor="defaultFormRegisterPassword" className="grey-text mt-4">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormRegisterPassword"
              className="form-control"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
             
            <div className="text-center mt-4">
              <MDBBtn className="white-text" color="default" type="submit">Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;