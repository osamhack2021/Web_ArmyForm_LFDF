import React from "react";

import Logo from "static/logo.png";
import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";

import SurveyCard from "component/SurveyCard";

import "style/Survey.scss";

const Survey = () => {
  const page3_data = [
    {
      type:4,
      name:"전 군 성폭력 예방 설문조사",
      target:"전 군",
      deadline:1
    },
    {
      type:5,
      name:"사이버네트워크작전센터 부대정밀진단 설문조사",
      target:"사이버네트워크작전센터 전 장병",
      deadline:3
    },
    {
      type:6,
      name:"부대종합전투력측정 참가자 모집",
      target:"사이버네트워크작전센터 전 장병",
      deadline:5
    },
    {
      type:4,
      name:"9월 급양 선호도 설문조사",
      target:"10급양대 급양대상 전 장병",
      deadline:7
    },
  ];

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
                <SurveyCard type="0" name="전군 성폭력 예방 설문조사" target="전 군"/>
                <SurveyCard type="1" name="전군 성폭력 예방 설문조사" target="전 군" deadline="5"/>
                <SurveyCard type="2" name="전군 성폭력 예방 설문조사" target="전 군" deadline="7"/>
                <SurveyCard type="3" name="전군 성폭력 예방 설문조사" target="전 군" deadline="15"/>
                <SurveyCard type="4" name="전군 성폭력 예방 설문조사" target="전 군"/>
                <SurveyCard type="5" name="전군 성폭력 예방 설문조사" target="전 군" deadline="2"/>
                <SurveyCard type="7" name="전군 성폭력 예방 설문조사" target="전 군"/>
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

        <div>
          <div className="wide_column_container">
            <h2>설문 결과</h2>
            <div className="card_layout">
              <button className="flat">
                <img src={LeftArrow} alt="<" />
              </button>
              <div className="card_list">
                <SurveyCard type="0" name="전군 성폭력 예방 설문조사" target="전 군"/>
                <SurveyCard type="0"/>
                <SurveyCard type="0"/>
                <SurveyCard type="0"/>
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

        <div className="background_green">
          <div className="wide_column_container">
            <h2>제작한 설문</h2>
            <div className="card_layout">
              <button className="flat">
                <img src={LeftArrow} alt="<" />
              </button>
              <div className="card_list">
                { 
                  page3_data.map( (item, index) => {
                    return <SurveyCard type={item.type} name={item.name} target={item.target} deadline={item.deadline}/>
                  })
                }
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

      <footer>
        <div>footer</div>
      </footer>
    </>
  );
};

export default Survey;
