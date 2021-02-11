import axios from 'axios'
const API_URL = 'http://localhost:3000'

export class APIService {
  // eslint-disable-next-line no-useless-constructor
  constructor () {}

  register (data) {
    const url = `${API_URL}/api/register`
    return axios.post(url, data)
  }
}
