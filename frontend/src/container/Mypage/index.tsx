import React from "react";

import NavBack from "container/component/NavBack";

function Mypage() {
  return (
    <>
      <NavBack />
      <div>
        <h1>마이페이지</h1>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호 변경" />
        <input type="password" placeholder="비밀번호 확인" />
        
        <select>
          <option>군</option>
          <option>육군</option>
          <option>해군</option>
          <option>공군</option>
        </select>

        <input list="data" type="text" placeholder="소속부대" />

        <datalist id="data" >
          <option>데이터 셋</option>
          <option>군대리아</option>
        </datalist>

        <button>저장하기</button>
      </div>
    </>
  );
}

export default Mypage;