import config from '../utils/config';

/**
 * 
 * @param {String} email
 * @param {String} password
 */
export const register = (email, password) => {
    const endpoint = `${config.apiBaseUrl}/account/register`;
    const headers = {'Content-Type': 'application/json'};
    const body = { email, password };

    return fetch(endpoint, { body: JSON.stringify(body), method: 'POST', headers });
};

/**
 * 
 * @param {String} email 
 * @param {String} password 
 */
export const login = (email, password) => {

};