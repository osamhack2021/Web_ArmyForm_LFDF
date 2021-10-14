// import CONFIG from "config";

// TODO: avoid localStorage

interface IloginSuccessInfo {
  jsonwebtoken: string;
  userid: string;
}

interface IloginSuccess {
  result: IloginSuccessInfo;
}
class User {
  parseLogin(json: string) {
    const resultObj: IloginSuccess = JSON.parse(json);
    localStorage.setItem("user", resultObj["result"].userid);
    localStorage.setItem("jwt", resultObj["result"].jsonwebtoken);
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    const jwtStr = localStorage.getItem("jwt");
    console.log("-- USER:" + userStr);
    console.log("-- jwt:" + jwtStr);
    if (userStr) return userStr;

    return null;
  }
}

export default new User();
