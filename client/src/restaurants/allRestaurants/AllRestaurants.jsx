import React, { useEffect, useState } from 'react';

import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBNavLink, MDBCardImage, MDBIcon } from 'mdbreact';

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
      <MDBRow>
        <MDBCol size={3}>
          <MDBRow className="no-gutters mt-4">
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

            <MDBCol size={12} className="mt-3">
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
          </MDBRow>
        </MDBCol>

        <MDBCol>
          <MDBRow className="mb-5 mt-4">
            <MDBCol size={12}>
              <div className="input-group form-sm form-1 pl-0">
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

          <MDBRow>
            {
              restaurantsList.map((restaurant) => {
                return (
                  <MDBCol className="mb-3" key={restaurant.name} size="3">
                    <MDBCard className="h-100">
                      <MDBCardBody className=" d-flex justify-content-center flex-wrap">
                        <MDBNavLink to={`/restaurants/${restaurant.name}`}>
                          <MDBCardImage src={restaurant.logoUrl} alt="Logo" />
                        </MDBNavLink>
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