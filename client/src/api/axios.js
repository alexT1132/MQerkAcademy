import axios from "axios";

const instance = axios.create({
    baseURL: 'http://192.168.1.3:4000/api',
    withCredentials: true
});

export const Host = 'http://192.168.1.3:4000/';

export default instance;