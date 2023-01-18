import axios from 'axios';

axios.defaults.baseURL = ' http://localhost:3001/'

const axiosInstance = () => {
  return axios;
}

export const getDataFromBackend: any = (url: string) => {
  return axiosInstance().get(`${url}`);
};

export const postDataToBackend: any = (url: string, data: any) => {
  return axiosInstance().post(`${url}`, data);
};

export const putDataToBackend: any = (url: string, data: any) => {
  return axiosInstance().put(`${url}`, data);
};

export const deleteDataFromBackend: any = (url: string) => {
  return axiosInstance().delete(`${url}`);
};