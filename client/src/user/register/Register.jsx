import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Form from '../../shared/hocs/Form'


class Register extends Component {
  emailOnChqngeHandler = this.props.changeHandlerFactory('email');
  passwordOnChqngeHandler = this.props.changeHandlerFactory('password');

  submitHandler = () => {
    const { email, password } = this.props.getFormState();
    console.log(email, password)
  }

  render() {

  const { email, password } = this.props.getFormState();

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={this.submitHandler}>
              <p className="h4 text-center my-4">Register</p>
              <label htmlFor="defaultFormRegisterEmail" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormRegisterEmail"
                className="form-control"
                onChange={this.emailOnChqngeHandler}
                value={email}
              />
              
              <label htmlFor="defaultFormRegisterPassword" className="grey-text mt-4">
                Your password
              </label>
              <input
                type="password"
                id="defaultFormRegisterPassword"
                className="form-control"
                onChange={this.passwordOnChqngeHandler}
                value={password}
              />
               
              <div className="text-center mt-4">
                <MDBBtn className="white-text" color="default" type="button" onClick={this.submitHandler}>Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
};

const initialState = {
  email: '',
  password: ''
}

export default Form(Register, initialState);