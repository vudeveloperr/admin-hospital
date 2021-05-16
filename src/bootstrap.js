import axios from 'axios'

// window.base_url = 'http://192.168.0.108:8080/v1'
window.base_url = 'http://localhost:8080/v1'
window.upload_url = 'http://192.168.0.108:8081'

window.axios = axios.create({
    baseURL: window.base_url,
    headers: {token: window.localStorage.getItem('token')}
  });
