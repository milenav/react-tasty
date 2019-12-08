import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const CreateRestaurant = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Create New Restaurant</p>
            <label htmlFor="RestaurantName" className="grey-text">
              Restaurant Name
            </label>
            <input
              type="text"
              id="RestaurantName"
              className="form-control"
            />
            <br />
            <label htmlFor="Kitchens" className="grey-text">
              Kitchens
            </label>
            <input
              type="text"
              id="Kitchens"
              className="form-control"
            />
            <br />
            <label htmlFor="LogoUrl" className="grey-text">
              Restaurant Logo
            </label>
            <input
              type="text"
              id="LogoUrl"
              className="form-control"
            />
            <br />
            <div className="text-center mt-4">
              <MDBBtn className="white-text" color="default" type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CreateRestaurant;