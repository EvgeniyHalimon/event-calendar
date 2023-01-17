import axios from 'axios';

const BASE_URL = '';

const axiosInstance = () => {
  return axios;
}

export const getDataFromBackend: any = (url: string) => {
  return axiosInstance().get(`${BASE_URL}${url}`);
};

export const postDataToBackend: any = (url: string, data: any) => {
  return axiosInstance().post(`${BASE_URL}${url}`, data);
};

export const putDataToBackend: any = (url: string, data: any) => {
  return axiosInstance().put(`${BASE_URL}${url}`, data);
};

export const deleteDataFromBackend: any = (url: string) => {
  return axiosInstance().delete(`${BASE_URL}${url}`);
};