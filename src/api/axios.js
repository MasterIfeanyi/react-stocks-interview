import axios from "axios"

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // your backend API base URL
  withCredentials: true, // important for http-only cookies
});

export default api;