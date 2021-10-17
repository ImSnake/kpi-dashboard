import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://server',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  }
});

export default {
  getEvents() {
    return apiClient.get('/api-recuest')
  }
}
