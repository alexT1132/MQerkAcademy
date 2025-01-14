import axios from "./axios.js";

export const createRequest = (data) => axios.post('/eeau', data);

export const getDataRequest = () => axios.get('/eeau');