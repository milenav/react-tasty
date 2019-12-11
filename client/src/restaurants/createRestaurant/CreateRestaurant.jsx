import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const CreateRestaurant = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center my-4">Create New Restaurant</p>
            <label htmlFor="RestaurantName" className="grey-text">
              Restaurant Name
            </label>
            <input
              type="text"
              id="RestaurantName"
              className="form-control"
            />
            
            <label htmlFor="Kitchens" className="grey-text mt-4">
              Kitchens
            </label>
            <input
              type="text"
              id="Kitchens"
              className="form-control"
            />
           
            <label htmlFor="LogoUrl" className="grey-text mt-4">
              Restaurant Logo
            </label>
            <input
              type="text"
              id="LogoUrl"
              className="form-control"
            />
            
            <div className="text-center mt-4">
              <MDBBtn className="white-text" color="default" type="submit">Create</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CreateRestaurant;