import React from 'react'
import axios from 'axios';

// Create an instance of axios with the base URL of your backend server
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/auth/', // Replace with your backend URL
    timeout: 10000, // Set a request timeout in milliseconds (optional)
    headers: {
        'Content-Type': 'application/json', // Default headers (optional)
    },
});

export default axiosInstance