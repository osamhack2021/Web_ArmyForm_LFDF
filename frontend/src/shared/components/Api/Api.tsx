import Interceptor from "./Interceptor";
import CONFIG from "config";

// TODO: avoid localStorage

class Api {
  login(Ilogin: any) {
    return new Promise((resolve, reject) => {
      Interceptor.getInstance()
        .post(CONFIG.API_SERVER + "/auth/signin", Ilogin)
        .then((res: any) => resolve(res.data))
        .catch((e) => reject(e));
    });
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
        .get(CONFIG.API_SERVER + "/survey/results", authHeader(Iconfig))
        .then((res: any) => resolve(res.data))
        .catch(reject);
    });
  }

  getSurveyList(Iconfig: any) {
    return new Promise((resolve, reject) => {
      Interceptor.getInstance()
        .get(CONFIG.API_SERVER + "/survey", authHeader(Iconfig))
        .then((res: any) => resolve(res.data))
        .catch(reject);
    });
  }

  get(info: any) {
    localStorage.setItem("temp", info);
    return JSON.parse(localStorage.getItem("temp") || "");
  }
}

export default new Api();

/*
  {headers: authHeader()}
  Record<string, string>
*/
function authHeader(Iany: any) {
  const jwtStr = localStorage.getItem("jwt");

  return jwtStr
    ? { headers: { "x-access-token": jwtStr }, ...Iany }
    : { ...Iany };
}
