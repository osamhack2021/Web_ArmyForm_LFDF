import Interceptor from "./Interceptor";
import CONFIG from "config";

// TODO: avoid localStorage

class Api {
  /**********************************
   *   Auth
   */
  login(Ilogin: any) {
    return new Promise((resolve, reject) => {
      /**
       * username,password
       */
      Interceptor.getInstance()
        .post(CONFIG.API_SERVER + "/auth/login", Ilogin)
        .then((res: any) => resolve(res.data))
        .catch((e) => reject(e));
    });
  }

  signup(IsignUp: any) {
    /**
     * signup - username,password,name,armyType,armyUnit,armyRank,serialNumber
     */
    return new Promise((resolve, reject) => {
      Interceptor.getInstance()
        .post(CONFIG.API_SERVER + "/auth/signup", IsignUp)
        .then((res: any) => resolve(res.data))
        .catch(reject);
    });
  }

  /*********************************
   * Survey 질문/통계
   */

  /**
   * results id : results
   */
  getSurvey(survey_id: any) {
    return new Promise((resolve, reject) => {
      Interceptor.getInstance()
        .post(CONFIG.API_SERVER + "/survey/results", survey_id, authHeader({}))
        .then((res: any) => resolve(res.data))
        .catch(reject);
    });
  }
  /**
   * OwnerSurveyList 제작한 설문
   */
  getOwnerSurveyList() {
    return new Promise((resolve, reject) => {
      Interceptor.getInstance()
        .get(CONFIG.API_SERVER + "/survey/OwnerSurveyList", authHeader({}))
        .then((res: any) => resolve(res.data))
        .catch(reject);
    });
  }
  /**
   * UnitSurveyList - :surveyList
   */
  getUnitSurveyList() {
    return new Promise((resolve, reject) => {
      Interceptor.getInstance()
        .get(CONFIG.API_SERVER + "/survey/UnitSurveyList", authHeader({}))
        .then((res: any) => resolve(res.data))
        .catch(reject);
    });
  }
  /**
   * remove
   */

  /**
   * create - name,json,deadline : survey.id
   */
  createSurvey(Idata: any) {
    return new Promise((resolve, reject) => {
      Interceptor.getInstance()
        .post(CONFIG.API_SERVER + "/survey", Idata, authHeader({}))
        .then((res: any) => resolve(res.data))
        .catch(reject);
    });
  }
  /*******************
   * result 답변부
   */

  /**
   * save - json, id : id
   */
  saveSurvey(Iconfig: any) {
    return new Promise((resolve, reject) => {
      Interceptor.getInstance()
        .put(CONFIG.API_SERVER + "/result", Iconfig, authHeader({}))
        .then((res: any) => resolve(res.data))
        .catch(reject);
    });
  }

  /**
   * find : id : result
   */

  get(info: any) {
    localStorage.setItem("temp", info);
    return JSON.parse(localStorage.getItem("temp") || "{}");
  }
}

export default new Api();

/*
  {headers: authHeader()}
  Record<string, string>
*/
function authHeader(Iany: any) {
  const tokenStr = localStorage.getItem("accessToken");
  return tokenStr
    ? {
        headers: { "x-access-token": tokenStr },
        ...Iany,
      }
    : { ...Iany };
}
