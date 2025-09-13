import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const addUser = (data) => axios.post(`${BACKEND_URL}api/user`, data);
export const  testEmail = (email) => axios.post(`${BACKEND_URL}api/user/test`, { email });
export const unsubscribeUser = (email) => axios.delete(`${BACKEND_URL}api/user/unsubscribe`, { data: { email } });