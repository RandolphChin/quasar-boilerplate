import axios from './request';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8001/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios({
      url: 'api/test/admin',
      method: 'get',
      headers: authHeader()
    })
  }
}

export default new UserService();
