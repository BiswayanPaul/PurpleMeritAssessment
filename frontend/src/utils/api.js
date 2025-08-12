import axios from "axios";

// Use Vite proxy for development - no environment variables needed
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000', // Empty baseURL - Vite proxy handles /api routing
    timeout: 10000,
    withCredentials: true, // Always send cookies with requests
});

export default api;
