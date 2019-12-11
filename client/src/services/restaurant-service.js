import config from '../utils/config';

/**
 * Get collection of restaurants
 * @name getAllRestaurants
 * @param {Number|String} limit Get only first N entries, where N = limit
 */
export const getAllRestaurants = async (limit = 10) => {
  try {
    const request = await fetch(`${config.apiBaseUrl}/restaurant?&limit=${limit}`);
    const response = await request.json();

    return response;
  } catch (ex) {
    console.log(ex);
  }
};

/**
 * Get restaurant detailed information
 * @name getRestaurantDetails
 * @param {String} restaurantName The name of the restaurant
 */
export const getRestaurantDetails = async (restaurantName) => {
  try {
    const request = await fetch(`${config.apiBaseUrl}/restaurant/${restaurantName}`);
    const response = await request.json();
    return response;
  } catch (ex) {
    console.log(ex);
  }
};

export const placeOrder = (restaurantId, order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('Order placed');
    }, 3000);
  });
};