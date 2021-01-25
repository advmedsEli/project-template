import axios from 'axios'
import { getToken } from '@/common/jwt.service'

const apiService = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // withCredentials: true,
  timeout: 5000
})

apiService.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${getToken()}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

apiService.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

export default apiService
