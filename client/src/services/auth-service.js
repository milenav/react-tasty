import config from '../utils/config';

const __tokenKey = 'tastyToken';

const __setSecurityToken = (token) => {
    localStorage.setItem(__tokenKey, token);
};

/**
 * Get localStorage stored API token
 * @name getToken 
 */
export const getToken = () => {
    const token = localStorage.getItem(__tokenKey);

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