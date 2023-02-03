import axios from 'axios';


export const rawgApi = axios.create({
    baseURL: 'https://api.rawg.io/api',
    headers: {}
})