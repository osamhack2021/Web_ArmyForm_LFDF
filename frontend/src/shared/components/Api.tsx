import Interceptor from "./Interceptor";
import CONFIG from "config";

// TODO: avoid localStorage

// localStorage.setItem("user", JSON.stringify(response.data));

class Api {
  login(Ilogin: any) {
    return new Promise((resolve, reject) => {
      Interceptor.getInstance()
        .post(CONFIG.API_SERVER + "/auth/login", Ilogin)
        .then((res: any) => resolve(res.data))
        .catch((e) => reject(e));
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  signup(IsignUp: any) {
    return new Promise((resolve, reject) => {
      Interceptor.getInstance()
        .post(CONFIG.API_SERVER + "/auth/signup", IsignUp)
        .then((res: any) => resolve(res.data))
        .catch(reject);
    });
  }

  getSurvey(Iconfig: any) {
    return new Promise((resolve, reject) => {
      Interceptor.getInstance()
        .post(CONFIG.API_SERVER + "/results", Iconfig)
        .then((res: any) => resolve(res.data))
        .catch(reject);
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new Api();

/*
  {headers: authHeader()}

function authHeader(): Record<string, string> {
  const userStr = localStorage.getItem("user");
  let user = null;
  if (userStr) user = JSON.parse(userStr);

  if (user && user.accessToken) {
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    return { "x-access-token": user.accessToken }; // for Node Express back-end
  } else {
    return {};
  }
}
*/
