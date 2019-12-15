import config from '../utils/config';
import { tokenKey } from '../utils/constants';

const __setSecurityToken = (token) => {
    if (!token) {
        localStorage.removeItem(tokenKey);
    } else {
        localStorage.setItem(tokenKey, token);
    }
};

/**
 * Check for set token into localStorage
 * @name hasTokenSet
 * @returns {Boolean} hasTokenSet
 */
export const hasTokenSet = () => {
    const token = localStorage.getItem(tokenKey);
    const hasTokenSet = token !== undefined && token !== null;

    return hasTokenSet;
}

/**
 * Get localStorage stored API token
 * @name getToken 
 */
export const getToken = () => {
    const token = localStorage.getItem(tokenKey);

    return token;
};

/**
 * 
 * @param {String} email
 * @param {String} password
 */
export const register = async (email, password) => {
    const endpoint = `${config.apiBaseUrl}/account/register`;
    const headers = {'Content-Type': 'application/json'};
    const body = { email, password };

    const response = await fetch(endpoint, { body: JSON.stringify(body), method: 'POST', headers });
    const json = response.json();

    return json;
};

/**
 * 
 * @param {String} email 
 * @param {String} password 
 */
export const login = async (email, password) => {
    const endpoint = `${config.apiBaseUrl}/account/login`;
    const headers = {'Content-Type': 'application/json'};
    const body = { email, password };

    const response = await fetch(endpoint, { body: JSON.stringify(body), method: 'POST', headers });
    const json = await response.json();

    __setSecurityToken(json.data.token);

    return json;
};

export const logout = () => {
  __setSecurityToken(null);
};