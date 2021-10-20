import axios from "axios";

const API_URL = "https://tshong3-osamhack2021-web-armyform-lfdf-9gpj7464h7wg6-8080.githubpreview.dev/api/auth/";

class AuthService {
  login(userid, passwd) {
    return axios
      .post(API_URL + "signin", {
        userid,
        passwd
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(userid, passwd, name, type, serial, rank, unit) {
    return axios.post(API_URL + "signup", {
      userid,
      passwd,
      name,
      type,
      serial,
      rank,
      unit
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();