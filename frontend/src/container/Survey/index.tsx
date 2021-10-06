import React from "react";

import Logo from "static/logo.png";
import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";

import "style/Survey.scss";

const Survey = () => {
  return (
    <>
      <div id="nav_container">
        <nav>
          <div>
            <div>
              <img id="icon" src={Logo} alt="ArmyForm" />
              <h1>ArmyForm</h1>
            </div>
            <div>
              <button className="flat">+</button>
              <button className="flat">마이페이지</button>
            </div>
          </div>
        </nav>
      </div>

      <div className="background_green">
        <div className="wide_column_container">
          <h2>진행중인 설문</h2>
          <div className="card_layout">
            <button className="flat">
              <img src={LeftArrow} alt="<" />
            </button>
            <div className="card_list">
              <div className="card">
                <div className="card_top">
                  <div>
                    <h4>D-3</h4>
                    <button className="card_circle">
                      <img className="card_icon" src={RightArrow} alt=">" />
                    </button>
                  </div>
                  <h3>전군 성폭력 예방 설문조사</h3>
                  <p>대상: 전 군</p>
                </div>
                <div className="card_bottom">
                  <button className="card_rect">시작하기</button>
                </div>
              </div>
            </div>
            <button className="flat">
              <img src={RightArrow} alt=">" />
            </button>
          </div>
          <div className="slider_layout">
            <button className="circle highlighted" />
            <button className="circle normal" />
            <button className="circle normal" />
          </div>
        </div>
      </div>

      <div className="wide_column_container">
        <div className="card"></div>
      </div>
      <div className="wide_column_container background_green">
        <div className="card"></div>
      </div>
      <div className="wide_column_container"></div>
      <div className="wide_column_container background_green"></div>
      <div className="wide_column_container"></div>
      <div className="wide_column_container background_green"></div>
      <div className="wide_column_container"></div>
      <div className="wide_column_container background_green"></div>
      <div className="wide_column_container"></div>

      <footer>
        <div>footer</div>
      </footer>
    </>
  );
};

export default Survey;
