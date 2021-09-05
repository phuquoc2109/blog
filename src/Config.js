import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://blog-dpq.herokuapp.com/api/",
})