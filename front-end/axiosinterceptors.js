import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
});

axiosInstance.interceptors.request.use((config) => {
    // No need to check for a token or set headers
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;