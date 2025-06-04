// client/src/api/auth.js
import axios from 'axios';
const API_URL = 'http://localhost:5000/api/auth';

export const login = (email, password) => axios.post(`${API_URL}/login`, { email, password });
export const register = (username, email, password) => axios.post(`${API_URL}/register`, { username, email, password });
