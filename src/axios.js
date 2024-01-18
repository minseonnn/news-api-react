import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  params: {
    apiKey: '06d0e3a5b3dd44ce9f4b3f011d79c3e2',
    qInTitle : " ",
  },
});

axiosInstance.interceptors.request.use((config) => {

  return config;
});

export { axiosInstance };