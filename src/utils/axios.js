import axios from 'axios';
import store from '../store';

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:9999' : 'http://localhost:3000';

export default axios.create({
    baseURL,
    withCredentials: true,
});

axios.interceptors.request.use(config => {
    const token = store.getState().auth?.token || '';
    config.headers.authorization = token ? `Bearer ${token}` : '';
    return config
})

axios.interceptors.response.use(response => response, error => {
    if (error.response.status === 401) {
        // store.dispatch(logout);
    }
    return Promise.reject(error);
})