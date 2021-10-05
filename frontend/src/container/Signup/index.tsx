import React from "react";

import LeftArrow from "static/left-arrow.png";

import "style/Signup.scss";

const Signup = () => {
  return (
    <>
      <nav className="simple_nav">
        <button className="flat">
          {/* <button className="flat" onclick="history.back()"> */}
          <img id="back_icon" src={LeftArrow} alt="<" />
        </button>
      </nav>

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
