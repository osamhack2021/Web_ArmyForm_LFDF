import React from "react";

import LeftArrow from "static/left-arrow.png";

import "style/Login.scss";

function Login() {
  return (
    <>
      <nav className="simple_nav">
        {/* <button className="flat" onClick="history.back()"> */}
        <button className="flat">
          <img id="back_icon" src={LeftArrow} alt="<" />
        </button>
      </nav>

      <div>
        <h1>로그인</h1>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button className="big_button">로그인</button>
        <div className="login_bottom_layout">
          <a href="./signup.html">회원가입</a>
          <p>또는</p>
          <a href="find_account.html">비밀번호 찾기</a>
        </div>
      </div>
    </>
  );
}

export default Login;
