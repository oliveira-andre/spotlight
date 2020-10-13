import axios from 'axios';

const Api = axios.create({
  headers: {
    authorization: 'Bearer ' + localStorage.getItem('token')
  },
  baseURL: '/api/v1'
});

export default Api;
