import config from '../utils/config';
import { get, post } from './http-service';

/**
 * Get collection of restaurants
 * @name getAllRestaurants
 * @param {Number|String} limit Get only first N entries, where N = limit
 */
export const getAllRestaurants = (limit = 10) => {
  try {
    const endpoint = `${config.apiBaseUrl}/restaurant?&limit=${limit}`;
    const response = get(endpoint);

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
export const getRestaurantDetails = (restaurantName) => {
  try {
    const endpoint = `${config.apiBaseUrl}/restaurant/${restaurantName}`;
    const response = get(endpoint);
  
    return response;
  } catch (ex) {
    console.log(ex);
  }
};

/**
 * Creates a new one restaurant
 * @param {String} name The name of the restaurant
 * @param {String} type The type of the restaurant
 */
export const createNewRestaurant = (name, type, logoUrl) => {
  const endpoint = `${config.apiBaseUrl}/restaurant`;
  const data = { name, type, logoUrl };
  const response = post(endpoint, data);

  return response;
};

export const placeOrder = (restaurantId, order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('Order placed');
    }, 3000);
  });
};