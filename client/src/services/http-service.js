import { getToken } from './auth-service';

export const get = (endpoint, options = {}) => {
    return __doRequest('GET', endpoint);
};

export const post = (endpoint, data, options = {}) => {
    return __doRequest('POST', endpoint, data, options);
};

// TODO: Implement error handling for this generic method
const __doRequest = async (method, endpoint, data = null, opt) => {
    const headers = {'Content-Type': 'Application/json',  'Authorization': `Bearer ${getToken()}`};
    const options = { ...opt, method, headers, };

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(endpoint, options);
    const json = await response.json();

    return json;
}