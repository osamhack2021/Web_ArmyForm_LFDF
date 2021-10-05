import React from "react";

import LeftArrow from "static/left-arrow.png";

import "style/Findaccount.scss";

function Findaccount() {
  return (
    <>
      <nav className="simple_nav">
        <button className="flat">
          {/* <button className="flat" onclick="history.back()"> */}
          <img id="back_icon" src={LeftArrow} alt="<" />
        </button>
      </nav>

      <div>
        <h1>비밀번호 찾기</h1>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <button>저장하기</button>
      </div>
    </>
  );
}

export default Findaccount;
