import React, { useEffect, useState } from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBCard, MDBCardUp, MDBAvatar, MDBCardBody } from 'mdbreact';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { menuCarouselOptions } from '../../utils/constants';
import { getRestaurantDetails, placeOrder } from '../../services/restaurant-service';

const RestaurantDetails = (props) => {
  const [isOrderInProgress, setIsOrderInProgress] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const total = orderItems.reduce((sum, i) => i.price + sum, 0);

  useEffect(() => {
    const { name } = props.match.params;

    if (name) {
      const getRestaurantByName = async (restaurantName) => {
        const restaurant = await getRestaurantDetails(restaurantName);

        if (restaurant && restaurant.data) {
          setRestaurant(restaurant.data);
          setMenuItems(restaurant.data.menu);
        }
      };

      getRestaurantByName(name);
    }
  }, [props.match.params]);
  

  return (
    restaurant ? (
      <div>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol className="md-10">
            <MDBCard className="face front img-fluid">
              <MDBCardBody>
                {/* TODO: Tweak with CSS */}
                <img style={{maxWidth: '600px'}} className="card-img-top" src={restaurant.logoUrl} alt="menu background" />
              </MDBCardBody>
            </MDBCard>

              <MDBContainer>
                <MDBRow>
                  <MDBCol>
                    <Slider {...menuCarouselOptions}> 
                      <div onClick={() => setMenuItems(restaurant.menu)}>All</div>
                      {
                        restaurant.categories && restaurant.categories.map((category) => {
                          return (
                            <div key={category} onClick={() => {
                              const filteredItems = restaurant.menu.filter((menuItem) => menuItem.category === category);
                              setMenuItems(filteredItems);
                            }}>
                              <span style={{ textTransform: 'capitalize' }}>
                                {category}
                              </span>
                            </div>
                          );
                        })
                      }
                    </Slider> 
                  </MDBCol>
                </MDBRow>
              </MDBContainer>

              {/* MENU */}
              {
                menuItems.map((item, index) => {
                  return (
                    <MDBRow key={index} onClick={() => setOrderItems([...orderItems, item])}>
                      <MDBCol className="md-6">
                      <MDBCard>
                        {item.name} - {item.price} EUR
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  );
                })
              }
            </MDBCol>

            <MDBCol className="md-4">
              <h2>{restaurant.name}</h2>

              <MDBContainer fluid={true}>
                {
                  orderItems && orderItems.length ? (
                    <div style={{ marginBottom: 16 }}>
                      {
                        orderItems.map((cartItem, index) => {
                          return (
                            <MDBRow key={index} between={true} style={{ marginBottom: 8 }}>
                              <MDBCol size="auto">
                                {cartItem.name}
                              </MDBCol>

                              <MDBCol size="auto">
                                <MDBContainer>
                                  <MDBRow center={true} >
                                    <MDBCol middle size="auto">
                                      {cartItem.price.toFixed(2)} EUR
                                    </MDBCol>

                                    <MDBCol middle onClick={(e) => {
                                      const itemsCopy = orderItems.slice();
                                      itemsCopy.splice(index, 1);

                                      setOrderItems(itemsCopy);
                                    }}>
                                      <MDBIcon
                                        style={{ color: '#FF0000' }}
                                        icon="times"
                                      />
                                    </MDBCol>
                                  </MDBRow>
                                </MDBContainer>
                              </MDBCol>
                            </MDBRow>
                          )
                        })
                      }
                    </div>
                  ) : (null)
                }

                <MDBRow>
                  <MDBCol size="auto">
                    Delivery:
                  </MDBCol>

                  <MDBCol size="auto">
                    {restaurant.deliveryPrice ? `${restaurant.deliveryPrice} EUR` : 'Free'}
                  </MDBCol>
                </MDBRow>

                <MDBRow between={true}>
                  <MDBCol size="auto">
                    Total:
                  </MDBCol>

                  <MDBCol size="auto">
                    {(total + restaurant.deliveryPrice).toFixed(2)} EUR
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  {
                    total < restaurant.minOrder && (
                      <MDBCol style={{ marginTop: 16 }}>
                        The minimum order amount is <strong>{`${restaurant.minOrder} EUR`}</strong>, excluding the delivery
                      </MDBCol>
                    )
                  }

                  <MDBCol size="12">
                    <MDBBtn
                      color="red"
                      block
                      disabled={!orderItems || !orderItems.length || isOrderInProgress}
                      onClick={() => setOrderItems([])}>
                      Empty cart
                    </MDBBtn>
                  </MDBCol>

                  <MDBCol size="12">
                    <MDBBtn
                      block
                      disabled={total < restaurant.minOrder || isOrderInProgress}
                      onClick={() => {
                        setIsOrderInProgress(true);

                        placeOrder(restaurant._id, orderItems)
                          .then(() => setIsOrderCompleted(true))
                          .catch((err) => console.log(err))
                          .finally(() => setIsOrderInProgress(false));
                      }}>

                      {
                        isOrderInProgress ? (
                          <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : ('Order')
                      }
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCol>
          </MDBRow>

          <MDBModal isOpen={isOrderCompleted} toggle={() => {
            setIsOrderCompleted(false);
            setOrderItems([]);
          }}>
            <MDBModalHeader>
              Order completed
            </MDBModalHeader>

            <MDBModalBody>
              Your order is placed and will be delivered soonly. Thank you!
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={() => {
                setIsOrderCompleted(false);
                setOrderItems([]);
              }}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    ) : (null)
  )
}

export default RestaurantDetails;