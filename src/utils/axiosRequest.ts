import axios, { AxiosInstance } from 'axios'

const request: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // api的base_url
  timeout: 5000 // request timeout
})

// http request拦截器
request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http response拦截器
request.interceptors.response.use(response => {
  const res = response.data
  if (res.status === 1) {
    return res.data
  }
}, error => {
  return Promise.reject(error)
})

export default request
