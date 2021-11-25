import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api-backend.eastus2.cloudapp.azure.com',
});

export { api };