import axios from 'axios'

export const employeeAPI = axios.create({
  baseURL: 'http://localhost:5000',
})