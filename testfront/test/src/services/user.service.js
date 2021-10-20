import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://tshong3-osamhack2021-web-armyform-lfdf-9gpj7464h7wg6-8080.githubpreview.dev/api/test';

class UserService {
  getPublicContent() {
    return axios.get(API_URL);
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();