import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://five-star-hotel.vercel.app/api/v1',
    baseURL: 'http://localhost:3001/api/v1',
    withCredentials: true,
  });

const useAxios = () => {
    return instance;
};

export default useAxios;