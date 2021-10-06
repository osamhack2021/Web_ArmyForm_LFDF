import React from "react";

import { useHistory } from "react-router-dom";

import move from "shared/components/move";

import NavBack from "container/component/NavBack";

import "style/Login.scss";

function Login() {
  const history = useHistory();

  return (
    <>
      <NavBack />
      <div>
        <h1>로그인</h1>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button className="big_button">로그인</button>
        <div className="login_bottom_layout">
          <button className="link" onClick={() => move(history, "/Signup")}>회원가입</button>
          <p>또는</p>
          <button className="link" onClick={() => move(history, "/Findaccount")}>
            비밀번호 찾기
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
