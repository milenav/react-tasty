import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { login, register } from '../../services/auth-service';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const credentialsAreNotSet = !email || !password;

    if(credentialsAreNotSet) {
      setError("Please provide your credentials!")
    } else {
      const registerResponse = await register(email, password);

      setError(null);

      if (registerResponse && registerResponse.data) {
        const loginResponse = await login(email, password);

        if (loginResponse && loginResponse.data && loginResponse.data.token) {
          // TODO: Redirect to HOME PAGE
        }
      }
    }
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