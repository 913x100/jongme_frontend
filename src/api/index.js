import axios from 'axios';

import store from '@/store';

import auth from './auth';

axios.interceptors.request.use(config => {
  const token = store.getters.token;

  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});

export default { auth };
