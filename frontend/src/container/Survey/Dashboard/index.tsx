import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";

import Nav from "container/component/Nav";
import SurveySlider from "container/component/SurveySlider";

import CircleGraph from "container/component/Dashboard/CircleGraph"
import SingleBarGraph from "container/component/Dashboard/SingleBarGraph"
import VerticalBarGraph from "container/component/Dashboard/VerticalBarGraph"
import HorizentalBarGraph from "container/component/Dashboard/HorizentalBarGraph"

import "style/Survey/DashboardWidget.scss";

//설문조사 데이터
  const SurveyData = [
    {
      title: "Test Form",
      contents: "테스트 데이터입니다.",
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  //위젯 데이터 (설문조사 결과 데이터)
   const resultData1 = [
    {
      name: "yes",
      value: 40,
    },
    {
      name: "no",
      value: 60,
    }
  ];

  const resultData2 = [
    {
      name: "육군",
      value: 10,
    },
    {
      name: "해군",
      value: 20,
    },
    {
      name: "공군",
      value: 30,
    },
    {
      name: "국방부",
      value: 40,
    }
  ];

const Dashboard = () => {
  const history = useHistory();
  const SurveyPages = SurveyData.length;
  const [SurveyCursor, setCursor] = useState(0);

  function updateCursor(cursor: number) {
    if (0 <= cursor && cursor < SurveyPages) {
      window.scrollTo(0, 0);
      setCursor(cursor);
    }
  }

  return (
    <>
      <Nav type="" title="FormName">
        <button className="flat">미리보기</button>
        <button className="flat">저장</button>
        <button className="flat" onClick={() => history.push("/Survey")}>
          나가기
        </button>
      </Nav>

      <div className="spread_row background_green">
        <button className="flat" onClick={() => updateCursor(SurveyCursor - 1)}>
          <img src={LeftArrow} alt="<" />
        </button>
          <div className="big_card">
            <h2>제목 입니다</h2>
            
            <h3>1.번 문항 입니다</h3>
            <CircleGraph data={resultData2} />

            <h3>2.번 문항 입니다</h3>
            <SingleBarGraph data={resultData1} />

            <h3>3.번 문항 입니다</h3>
            <VerticalBarGraph data={resultData1} />

            <h3>4.번 문항 입니다</h3>
            <HorizentalBarGraph data={resultData1} />

            <h3>5.번 문항 입니다</h3>
            <SingleBarGraph data={resultData1} />
            
            <SurveySlider
              current={SurveyCursor}
              length={SurveyPages}
              moveFunc={(index) => updateCursor(index)}
            />
          </div>
        <button className="flat" onClick={() => updateCursor(SurveyCursor + 1)}>
          <img src={RightArrow} alt=">" />
        </button>
      </div>
    </>
  );
};

export default Dashboard;