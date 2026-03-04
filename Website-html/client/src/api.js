import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api';

const API = "https://fit-track-gv7h.onrender.com";

axios.get(`${API}/api/workouts`);
axios.post(`${API}/api/workouts`, data);
axios.put(`${API}/api/workouts/${id}`, data);
axios.delete(`${API}/api/workouts/${id}`);

export default axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json'
  }
});