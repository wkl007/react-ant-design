import 'es6-promise'
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // api的base_url
  timeout: 5000, // request timeout
})

// http 请求拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http 响应拦截器
service.interceptors.response.use(response => {
  /**
   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
   */
  const res = response.data
  if (res.status === 1) {
    return res.data
  }
}, error => {
  return Promise.reject(error)
})

export default service
