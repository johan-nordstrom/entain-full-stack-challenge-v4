import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8763',
});

export default axiosClient;