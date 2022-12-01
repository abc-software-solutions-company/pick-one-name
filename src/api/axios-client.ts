import axios from 'axios';

import {setupInterceptorsTo} from './interceptors';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3500',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});

setupInterceptorsTo(axiosClient);

export default axiosClient;
