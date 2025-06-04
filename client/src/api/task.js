// client/src/api/task.js
import axiosInstance from './axiosInstance';

export const fetchRandomTask = (category) => {
  const params = category ? { category } : {};
  return axiosInstance.get('/random', { params });
};

export const fetchHistory = () => {
  return axiosInstance.get('/history');
};

export const deleteHistoryItem = (id) => {
  return axiosInstance.delete(`/history/${id}`);
};
