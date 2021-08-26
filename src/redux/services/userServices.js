import env from 'dotenv';
import axios from 'axios';

env.config();

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const createUser = newUser => API.post('/users', newUser);

