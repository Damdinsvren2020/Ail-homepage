import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api2.ail.mn/'
});

export default instance;