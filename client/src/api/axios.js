import axios from "axios";

const instance = axios.create({
<<<<<<< Updated upstream
    baseURL: 'http://192.168.1.22:4000/api',
    withCredentials: true
});

export const Host = 'http://192.168.1.22:4000/';
=======
    baseURL: 'http://192.168.0.19:4000/api',
    withCredentials: true
});

export const Host = 'http://192.168.0.19:4000/';
>>>>>>> Stashed changes

export default instance;