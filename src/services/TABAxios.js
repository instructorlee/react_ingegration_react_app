import axios from 'axios';
import { config } from '../config'

const axiosInstance = axios.create({
    baseURL: config.API_URL,
    timeout: 0,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'withCredentials': true
    }
});



axiosInstance.interceptors.response.use(                                                                  
    response => response,                                                                                       // axios submits request
    async error => {
      const originalRequest = error.config;
        if (error.response.status === 401) {                                                                    // if 401 is returned, the token has expired
            const refresh_token = window.localStorage.getItem('refresh_token');
            try {
                const response = await axiosInstance.post('/user/refresh-token', { refresh: refresh_token });   // send the refresh token
                window.localStorage.setItem('access_token', response.data.auth_token);                          // if valid, new access and refresh tokens are returned
                window.localStorage.setItem('refresh_token', response.data.refresh_token);
                originalRequest.headers['Authorization'] = response.data.auth_token;
                return axiosInstance(originalRequest);                                                          // re-submits original request
            }
            catch (err) {
                console.log(err);                                                                               // if there is an issue
            }
        }
      return Promise.reject(error);
  }
);

/*
  Each time a request is made, the access token needs to be added to the header
*/
axiosInstance.interceptors.request.use(
    config => {
      config.headers['Authorization'] = window.localStorage.getItem('access_token');
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  );

export default axiosInstance;