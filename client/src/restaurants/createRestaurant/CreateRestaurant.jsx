import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { useState } from "react";
import { createNewRestaurant } from "../../services/restaurant-service";
import { updateUserProp } from "../../services/auth-service";

const CreateRestaurant = (props) => {
  const [restaurantData, setRestaurantData] = useState({});

  const fillOutRestaurantData = ({ target }) => {
    const { name, value } = target;
    const newData = { ...restaurantData, [name]: value };

    setRestaurantData(newData);
  };

  const handleSubmitNewRestaurant = async (e) => {
    e.preventDefault();

    const restaurant = await createNewRestaurant(name, type, logoUrl);

    if (restaurant && restaurant.data) {
      updateUserProp('restaurants', restaurant.data._id);
      
      props.history.push('/restaurant');
    } else {
      // TODO: Set error
    }
  }

  const {
    name,
    type,
    logoUrl,
    minOrder
  } = restaurantData;

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
              name="name"
              value={name || ''}
              id="RestaurantName"
              className="form-control"
              onChange={fillOutRestaurantData}
            />
            
            <label htmlFor="restaurant-type" className="grey-text mt-4">
              Type
            </label>
            <input
              type="text"
              id="restaurant-type"
              name="type"
              value={type || ''}
              className="form-control"
              onChange={fillOutRestaurantData}
            />

            <label htmlFor="LogoUrl" className="grey-text mt-4">
              Restaurant Logo
            </label>
            <input
              type="text"
              id="LogoUrl"
              name="logoUrl"
              value={logoUrl || ''}
              className="form-control"
              onChange={fillOutRestaurantData}
            />
            
            <label htmlFor="min-order" className="grey-text mt-4">
              Min order
            </label>
            <input
              type="number"
              id="min-order"
              name="minOrder"
              value={minOrder || 0}
              className="form-control"
              onChange={fillOutRestaurantData}
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