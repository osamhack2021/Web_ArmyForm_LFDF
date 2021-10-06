import React from "react";

import NavBack from "container/component/NavBack";

import "style/Findaccount.scss";

function Findaccount() {
  return (
    <>
      <NavBack />
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
