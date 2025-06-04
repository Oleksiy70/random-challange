// client/src/api/task.js
import axios from 'axios';
import { getToken } from '../utils/auth';
const API_URL = 'http://localhost:5000/api/tasks';

export const fetchRandomTask = (category) => {
  const config = { headers: { Authorization: `Bearer ${getToken()}` } };
  const params = category ? { category } : {};
  return axios.get(`${API_URL}/random`, { ...config, params });
};

export const fetchHistory = () => {
  const config = { headers: { Authorization: `Bearer ${getToken()}` } };
  return axios.get(`${API_URL}/history`, config);
};

export const deleteHistoryItem = (id) => {
  const config = { headers: { Authorization: `Bearer ${getToken()}` } };
  return axios.delete(`http://localhost:5000/api/tasks/history/${id}`, config);
};
