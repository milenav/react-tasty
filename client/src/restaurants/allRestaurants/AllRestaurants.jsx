import React, { useEffect, useState } from 'react';

import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBNavLink, MDBCardImage, MDBCardTitle, MDBIcon, MDBCardFooter } from 'mdbreact';

import { deliveryTypes, kitchenTypes } from '../../utils/constants';

import { getAllRestaurants } from '../../services/restaurant-service';


const AllRestaurants = () => {
  const [selectedKitchenType, setSelectedKitchenType] = useState('all');
  const [selectedOrderType, setSelectedOrderType] = useState('none');
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    // Define async in order to use await
    const getRestaurants = async () => {
      const restaurants = await getAllRestaurants();

      if (restaurants && restaurants.data) {
        setRestaurantsList(restaurants.data);
      }
    };

    // Call async function
    getRestaurants();
  }, []);

  return (
    <MDBContainer>
          <MDBRow className="my-5" >
            <MDBCol md="12" className="my-5 mx-auto">
              <div className="input-group form-lg form-1 pl-0">
                <input 
                  type="search"
                  className="form-control"
                  placeholder="Улица и номер"
                  aria-label="Search address"
                />

                <div className="input-group-append">
                  <span className="input-group-text lighten-3" id="basic-text1">
                    <MDBIcon className="text-white" icon="search" />
                  </span>
                </div>
              </div>
            </MDBCol>
          </MDBRow>

      <MDBRow className="mt-5">
        <MDBCol lg="3" md="3">
            <MDBCol>
              <h6 className="text-left">Цена за доставка</h6>
              {
                deliveryTypes.map((orderType, index) => {
                  return (
                    <div className="custom-control custom-radio text-left" key={index}>
                      <input
                        id={orderType.type}
                        type="radio"
                        className="custom-control-input"
                        checked={orderType.type === selectedOrderType}
                        onChange={(e) => setSelectedOrderType(orderType.type)}
                      />

                      <label
                        className="custom-control-label"
                        htmlFor={orderType.type}>
                        {orderType.name}
                      </label>
                    </div>
                  );
                })
              }
            </MDBCol>

            <MDBCol className="mb-5">
              <h6 className="text-left">Вид кухня</h6>
              {
                kitchenTypes.map((kitchenType, index) => {
                  return (
                    <div className="custom-control custom-radio text-left" key={index}>
                      <input
                        id={kitchenType.type}
                        type="radio"
                        checked={kitchenType.type === selectedKitchenType}
                        className="custom-control-input"
                        onChange={() => setSelectedKitchenType(kitchenType.type)}
                      />

                      <label
                        className="custom-control-label"
                        htmlFor={kitchenType.type}>
                        {kitchenType.name}
                      </label>
                    </div>
                  );
                })
              }
            </MDBCol>
         
        </MDBCol>

        <MDBCol lg="9" md="9">
          <MDBRow>
            {
              restaurantsList.map((restaurant) => {
                return (
                  <MDBCol lg="4" className="card-deck mb-5 mr-2" key={restaurant.name} >
                    <MDBCard cascade narrow ecommerce>

                        <MDBCardBody cascade className="text-center">
                        <MDBNavLink to={`/restaurant/${restaurant.name}`}>
                          <MDBCardImage
                          cascade
                          src={restaurant.logoUrl} 
                          top
                          alt="Logo" 
                          overlay="white-slight"
                          className="img-fluid"
                          />
                        </MDBNavLink>
                        <MDBCardTitle>
                          <strong>
                        <h5 className="grey-text">{restaurant.name}</h5>
                        </strong>
                        </MDBCardTitle>
                          <MDBCardFooter className="modal-footer d-flex justify-content-between">
                            <MDBIcon fab icon="facebook grey-text" />
                            <MDBIcon icon="share-alt grey-text" />
                            <MDBIcon far icon="heart grey-text" />
                          </MDBCardFooter>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                );
              })
            }
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AllRestaurants;