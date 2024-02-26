import {AxiosResponse} from 'axios';

import axiosClient from './axios-client';

const responseBody = (response: AxiosResponse) => response;

export async function get<T>(url: string) {
  const response = await axiosClient.get<T>(url);
  return responseBody(response).data;
}

export async function post<T>(url: string, data: unknown) {
  const response = await axiosClient.post<T>(url, data);
  return responseBody(response).data;
}

export async function put<T>(id: unknown, data: T) {
  const response = await axiosClient.put<T>(String(id), data);
  return responseBody(response);
}

export async function patch<T>(id: unknown, data: T) {
  const response = await axiosClient.patch<T>(String(id), data);
  return responseBody(response);
}

export async function destroy<T>(id: unknown) {
  const response = await axiosClient.delete<T>(String(id));
  return responseBody(response);
}
