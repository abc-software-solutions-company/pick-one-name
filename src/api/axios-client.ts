import axios from 'axios';

export interface IAxiosAny {
  [k: string]: any;
}

export interface IAxiosError {
  status: number;
  name: string;
  message: string;
  details: IAxiosAny;
}

export interface IAxiosResponse<T> {
  data: T;
  meta: IAxiosAny;
  error: IAxiosError;
}

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3100/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosClient;
