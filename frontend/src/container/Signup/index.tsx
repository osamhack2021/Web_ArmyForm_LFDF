import React from "react";
import { useHistory } from "react-router-dom";

import NavBack from "container/component/NavBack";

import "style/Signup.scss";

const Signup = () => {
  return (
    <>
      <NavBack />

      <div>
        <h1>회원가입</h1>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <input type="text" placeholder="계급" />
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="군" />
        <input type="text" placeholder="군번" />
        <input type="text" placeholder="소속" />
        <input type="email" placeholder="이메일" />
        <button>계정 만들기</button>
      </div>
    </>
  );
};

export default Signup;
