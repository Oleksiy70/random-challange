import axios from 'axios';
import { getToken } from '../utils/auth';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',  // твій базовий URL API
});

axiosInstance.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

export default axiosInstance;
