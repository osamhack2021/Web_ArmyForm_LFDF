import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";

import Nav from "container/component/Nav";
import SurveySlider from "container/component/SurveySlider";

const SurveyCreate = () => {
  const history = useHistory();
  //설문조사 데이터
  const SurveyData = [
    {
      title: "Test Form",
      contents: "테스트 데이터입니다.",
    },
  ];

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
        <div>
          <div className="big_card">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <SurveySlider
              current={SurveyCursor}
              length={SurveyPages}
              moveFunc={(index) => updateCursor(index)}
            />
          </div>
        </div>
        <button className="flat" onClick={() => updateCursor(SurveyCursor + 1)}>
          <img src={RightArrow} alt=">" />
        </button>
      </div>
    </>
  );
};

export default SurveyCreate;
