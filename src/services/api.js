
/* eslint-disable no-undef */
import axios from 'axios'
const baseUrl = `${ process.env.REACT_APP_API_URL }/v1`;
const axiosInstance =  axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    crossDomain: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})
axiosInstance.interceptors.request.use(function (config) {
    return config;
});
axiosInstance.interceptors.response.use((response) => {
    if (response.data && response.data.error) {
        return Promise.reject(response);
    }
    return response;
}, (error) => {
    if(error.response.status === 401){
    }
    if(!error.response) {
        return Promise.reject(error);
    }
    return Promise.reject(error);
});
export const getDynamicURL = (url, data) => {
    return url.split('/').map(urlPart => (urlPart[ 0 ] === ':' ? data[ urlPart.substring(1) ] : urlPart)).join('/')
}
export default axiosInstance;