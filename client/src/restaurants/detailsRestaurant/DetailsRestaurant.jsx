import React, { useEffect, useState } from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBCard, MDBCardBody } from 'mdbreact';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './DetailsRestaurant.css';
import { menuCarouselOptions } from '../../utils/constants';
import { getUserProp } from '../../services/auth-service';
import { getRestaurantDetails, placeOrder, deleteRestaurant } from '../../services/restaurant-service';

const RestaurantDetails = ({ match, history }) => {
  const [isOrderInProgress, setIsOrderInProgress] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const total = orderItems.reduce((sum, i) => i.price + sum, 0);

  const closeRestaurant = async () => {
    if (isOwner) {
      // TODO: Implement confirmation modal
      deleteRestaurant(restaurant._id).then(() => {
        history.push('/restaurant');
      });
    }
  };

  useEffect(() => {
    const { name } = match.params;

    if (name) {
      const getRestaurantByName = async (restaurantName) => {
        const restaurant = await getRestaurantDetails(restaurantName);

        if (restaurant && restaurant.data) {
          const myRestaurants = getUserProp('restaurants');
          if (myRestaurants && myRestaurants.length) {
            const isTheLoadedRestaurantMine = myRestaurants.includes(restaurant.data._id);

            setIsOwner(isTheLoadedRestaurantMine);
          }

          setRestaurant(restaurant.data);
          setMenuItems(restaurant.data.menu);
        }
      };

      getRestaurantByName(name);
    }
  }, [match.params]);


  return (
    restaurant ? (
      <div>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol className="md-8 text-center">
              <MDBCard className="img-fluid">
                <MDBCardBody className="mx-auto hover zoom">
                  <img className="card-img-top" src={restaurant.logoUrl} alt="menu background" />
                </MDBCardBody>
                </MDBCard>

                {/* Slider */}
              <MDBContainer className="md-8 mx-5 my-3 mx-auto">
                <MDBRow>
                  <MDBCol>
                    <Slider className="grey lighten-5 py-2" {...menuCarouselOptions}>
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
                    {
                  isOwner ? (
                    
                      <MDBBtn className="white-text mt-4" color="default" onClick={closeRestaurant}>Delete restaurant</MDBBtn>
                    
                      ) : (null)
                    }
                  </MDBCol>
                </MDBRow>
              </MDBContainer>


      

              {/* MENU */}
              {
                menuItems.map((item, index) => {
                  return (
                    <MDBRow key={index} onClick={() => setOrderItems([...orderItems, item])}>
                      <MDBCol className="md-8">
                        <MDBCard className="px-3 mb-3 py-1">
                          <MDBCardBody className="d-flex justify-content-between flex-wrap">
                            <img style={{maxWidth: '2rem'}} className="img-fluid rounded-circle z-depth-1" src="https://image.flaticon.com/icons/png/128/45/45332.png" alt="icon-food"/>
                            <strong>
                              {item.name} - {item.price} EUR
                          </strong>
                            <MDBIcon icon="check" className="orange-text" />
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  );
                })
              }
            </MDBCol>


              {/* Card */}
            <MDBCol className="md-4 mx-5 mt-5">
              <MDBContainer fluid={true}>
                <h2>{restaurant.name}</h2>
                {
                  orderItems && orderItems.length ? (
                    <div style={{ marginBottom: 16 }}>
                      {
                        orderItems.map((cartItem, index) => {
                          return (
                            <MDBRow key={index} between={true}>
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
                                        icon="times-circle"
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

                <MDBRow>
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
                      className="white-text mt-3"
                      color="orange"
                      block
                      disabled={!orderItems || !orderItems.length || isOrderInProgress}
                      onClick={() => setOrderItems([])}>
                      Empty cart
                    </MDBBtn>
                  </MDBCol>

                  <MDBCol size="12">
                    <MDBBtn
                      className="white-text mb-5"
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
              <MDBBtn className="white-text mx-auto" color="default" onClick={() => {
                setIsOrderCompleted(false);
                setOrderItems([]);
                history.push('/restaurant');
              }}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    ) : (null)
  )
}

export default RestaurantDetails;