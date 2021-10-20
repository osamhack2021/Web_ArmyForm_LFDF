// import CONFIG from "config";

// TODO: avoid localStorage

interface IloginSuccess {
  username: string;
  id: string;
  accessToken: string;
}
class User {
  parseLogin(json: string) {
    const resultObj: IloginSuccess = JSON.parse(json);
    localStorage.setItem("username", resultObj.username);
    localStorage.setItem("id", resultObj.id);
    localStorage.setItem("accessToken", resultObj.accessToken);
  }

  logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("accessToken");
  }

  getCurrentUser() {
    // const usernameStr = localStorage.getItem("username");
    const useridStr = localStorage.getItem("id");
    // const tokenStr = localStorage.getItem("accessToken");
    // console.log("-- USERNAME:" + usernameStr);
    // console.log("-- USERID:" + useridStr);
    // console.log("-- TOKEN:" + tokenStr);
    if (useridStr) return useridStr;

    return null;
  }
}

export default new User();
