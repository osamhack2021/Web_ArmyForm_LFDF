import Findaccount from "container/Findaccount";
import Login from "container/Login";

import Main from "container/Main";
// import Test from "container/Main/Test";

import Signup from "container/Signup";

import Survey from "container/Survey";
import SurveyCreate from "container/Survey/Create";
import SurveyDashboard from "container/Survey/Dashboard";
import SurveyPage from "container/Survey/Page";

const routes = [
  {
    name: "메인",
    path: "/",
    exact: true,
    component: Main,
    subRoutes: [
      // {
      //   name: "테스트화면",
      //   path: "/Main/Test",
      //   exact: false,
      //   component: Test,
      //   subRoutes: [],
      // },
    ],
  },
  {
    name: "로그인",
    path: "/Login",
    exact: false,
    component: Login,
    subRoutes: [],
  },
  {
    name: "가입",
    path: "/Signup",
    exact: false,
    component: Signup,
    subRoutes: [],
  },
  {
    name: "계정찾기",
    path: "/Findaccount",
    exact: false,
    component: Findaccount,
    subRoutes: [],
  },
  {
    name: "설문",
    path: "/Survey",
    exact: true,
    component: Survey,
    subRoutes: [],
  },
  {
    name: "설문 생성",
    path: "/Survey/Create",
    exact: false,
    component: SurveyCreate,
    subRoutes: [],
  },
  {
    name: "설문 대시보드",
    path: "/Survey/Dashboard",
    exact: false,
    component: SurveyDashboard,
    subRoutes: [],
  },
  {
    name: "설문 페이지",
    path: "/Survey/Page",
    exact: false,
    component: SurveyPage,
    subRoutes: [],
  },
];

export default routes;
