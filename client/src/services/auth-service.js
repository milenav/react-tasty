import config from '../utils/config';
import { storageKey } from '../utils/constants';

const __setUser = (userData) => {
    if (!userData) {
        localStorage.removeItem(storageKey);
    } else {
        localStorage.setItem(storageKey, JSON.stringify(userData));
    }
};

/**
 * Check for set token into localStorage
 * @name hasTokenSet
 * @returns {Boolean} hasTokenSet
 */
export const hasTokenSet = () => {
    const token = getToken();
    const hasTokenSet = token !== undefined && token !== null;

    return hasTokenSet;
}

/**
 * Get localStorage stored API token
 * @name getToken 
 */
export const getToken = () => {
    const storage = localStorage.getItem(storageKey);
    const storageJson = JSON.parse(storage);

    return storageJson ? storageJson.token : undefined;
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

    __setUser(json.data);

    return json;
};

export const logout = () => {
  __setUser(null);
};