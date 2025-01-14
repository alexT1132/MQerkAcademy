import axios from "./axios.js";

export const createRequest = (d) => axios.post('/counter', d);

export const getDataRequest = () => axios.get('/counter');

export const getDataEeauRequest = () => axios.get('/counter_eeau');

export const getDataEeapRequest = () => axios.get('/counter_eeap');