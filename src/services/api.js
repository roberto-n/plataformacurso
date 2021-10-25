import axios from "axios";


export const api = axios.create({
    baseURL:'http://crud-app.loc/api/',
});


export default api;