import React, {Component} from "react";

import Logo from "static/logo.png";
import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";

import SurveyCard from "container/component/SurveyCard";
import Slider from "container/component/Slider";

import "style/Survey.scss";

class Survey extends Component {
  state = {
    page1_count: 7,//Math.round(data1.length / column_count);
    page2_count: 4,
    page3_count: 3,
    
    page1_pointer: 0,
    page2_pointer: 1,
    page3_pointer: 0,
  }

  render(){
    //Survey Data
    const data1 = [
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

    let data2 = [{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"},{name:"7"}];
    let data3 = [{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"},{name:"7"}];

    //window 크기에 따라 Card 개수 다르게 하고 싶습니다.
    const cardWidth = 257;
    let column_count = Math.floor(innerWidth/cardWidth - 1);
    if(column_count <= 0) column_count = 1;

    let page1_data = data1.slice(this.state.page1_pointer*column_count, (this.state.page1_pointer+1)*column_count);
    let page2_data = data2.slice(this.state.page2_pointer*column_count, (this.state.page2_pointer+1)*column_count);
    let page3_data = data1.slice(this.state.page3_pointer*column_count, (this.state.page3_pointer+1)*column_count);

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
                <SurveyCard type="0" name="전군 성폭력 예방 설문조사" target="전 군" deadline="0"/>
                <SurveyCard type="1" name="전군 성폭력 예방 설문조사" target="전 군" deadline="5"/>
                <SurveyCard type="2" name="전군 성폭력 예방 설문조사" target="전 군" deadline="7"/>
                <SurveyCard type="3" name="전군 성폭력 예방 설문조사" target="전 군" deadline="15"/>
                <SurveyCard type="4" name="전군 성폭력 예방 설문조사" target="전 군" deadline="0"/>
                <SurveyCard type="5" name="전군 성폭력 예방 설문조사" target="전 군" deadline="2"/>
                <SurveyCard type="7" name="전군 성폭력 예방 설문조사" target="전 군" deadline="0"/>
              </div>
              <button className="flat">
                <img src={RightArrow} alt=">" />
              </button>
            </div>
            <Slider current={this.state.page1_pointer} length={this.state.page1_count} />
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
                <SurveyCard type="0" name="전군 성폭력 예방 설문조사" target="전 군" deadline="0"/>
                <SurveyCard type="0" name="전군 성폭력 예방 설문조사" target="전 군" deadline="0"/>
                <SurveyCard type="0" name="전군 성폭력 예방 설문조사" target="전 군" deadline="0"/>
              </div>
              <button className="flat">
                <img src={RightArrow} alt=">" />
              </button>
            </div>
            <Slider current={this.state.page2_pointer} length={this.state.page2_count} />
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
                    return <SurveyCard name={item.name} target={item.target} deadline={item.deadline}/>
                  })
                }
              </div>
              <button className="flat">
                <img src={RightArrow} alt=">" />
              </button>
            </div>
            <Slider current={this.state.page3_pointer} length={this.state.page3_count} />
          </div>
        </div>

        <footer>
          <div>footer</div>
        </footer>
      </>
    );
  }
};

export default Survey;