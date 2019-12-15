import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { useState } from "react";
import { createNewRestaurant } from "../../services/restaurant-service";

const CreateRestaurant = (props) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [logoUrl, setLogoUrl] = useState('');

  const handleSubmitNewRestaurant = async (e) => {
    e.preventDefault();

    const restaurant = await createNewRestaurant(name, type, logoUrl);

    if (restaurant) {
      props.history.push('/restaurant');
    }
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleSubmitNewRestaurant}>
            <p className="h4 text-center my-4">Create New Restaurant</p>
            <label htmlFor="RestaurantName" className="grey-text">
              Restaurant Name
            </label>
            <input
              type="text"
              id="RestaurantName"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
            
            <label htmlFor="restaurant-type" className="grey-text mt-4">
              Type
            </label>
            <input
              type="text"
              id="restaurant-type"
              className="form-control"
              onChange={(e) => setType(e.target.value)}
            />

            <label htmlFor="LogoUrl" className="grey-text mt-4">
              Restaurant Logo
            </label>
            <input
              type="text"
              id="LogoUrl"
              className="form-control"
              onChange={(e) => setLogoUrl(e.target.value)}
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