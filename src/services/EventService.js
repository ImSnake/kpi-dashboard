import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/ImSnake/kpi-dashboard',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  }
});

export default {

  getYearList() {
    return apiClient.get('/yearList')
  },

  getYearData(year) {
    console.log(year);
    return apiClient.get(`/${year}`);
  }
}
