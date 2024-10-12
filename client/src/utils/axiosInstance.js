// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://news-pulse-mu.vercel.app',  // Use the environment variable
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json' // Set the content type to JSON
  },
});

export default axiosInstance;
