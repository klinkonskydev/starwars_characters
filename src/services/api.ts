import axios from 'axios'
const baseURL = 'https://swapi.dev/api'

export const api = axios.create({
  baseURL
})
