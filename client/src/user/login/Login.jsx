import React, { useState, useContext } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { login } from '../../services/auth-service';
import AppContext from '../../app/AppContext';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const appContext = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please provide your credentials!");
    } else {
      setError(null);
      appContext.loginUser(email, password);
    }
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleSubmit}>
            <p className="h4 text-center my-4">Login</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your email
              </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />

            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text mt-4">
              Your password
              </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              onChange={e => setPassword(e.target.value)}
              value={password}
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