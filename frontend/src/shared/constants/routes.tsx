import Findaccount from "container/Findaccount";
import Login from "container/Login";
import Main from "container/Main";
import Signup from "container/Signup";
import Mypage from "container/Mypage";

import Survey from "container/Survey";
import SurveyCreate from "container/Survey/Create";
import SurveyPage from "container/Survey/Page";
import DashboardPage from "container/Survey/Dashboard";

import Logout from "shared/components/User/Logout";

const routes = [
  {
    name: "메인",
    path: "/",
    exact: true,
    component: Main,
    needAuth: false,
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
    needAuth: false,
    subRoutes: [],
  },
  {
    name: "로그아웃",
    path: "/Logout",
    exact: false,
    component: Logout,
    needAuth: false,
    subRoutes: [],
  },
  {
    name: "가입",
    path: "/Signup",
    exact: false,
    component: Signup,
    needAuth: false,
    subRoutes: [],
  },
  {
    name: "계정찾기",
    path: "/Findaccount",
    exact: false,
    component: Findaccount,
    needAuth: false,
    subRoutes: [],
  },
  {
    name: "마이페이지",
    path: "/Mypage",
    exact: false,
    component: Mypage,
    needAuth: true,
    subRoutes: [],
  },
  {
    name: "설문",
    path: "/Survey",
    exact: true,
    component: Survey,
    needAuth: true,
    subRoutes: [],
  },
  {
    name: "설문 생성",
    path: "/Survey/Create",
    exact: false,
    component: SurveyCreate,
    needAuth: true,
    subRoutes: [],
  },
  {
    name: "설문 페이지",
    path: "/Survey/Page/:survey_id",
    exact: false,
    component: SurveyPage,
    needAuth: true,
    subRoutes: [],
  },
  {
    name: "대시보드 페이지",
    path: "/Survey/Dashboard/:survey_id",
    exact: false,
    component: DashboardPage,
    needAuth: true,
    subRoutes: [],
  },
];

export default routes;
