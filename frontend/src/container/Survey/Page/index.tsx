import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Survey, StylesManager, SurveyModel, Model } from "survey-react";

import Api from "shared/components/Api";
import move from "shared/components/move";

// import LeftArrow from "static/left-arrow.png";
// import RightArrow from "static/right-arrow.png";

import Nav from "container/component/Nav";
// import SurveySlider from "container/component/SurveySlider";

import "style/Survey/Page.scss";

import { json } from "./survey_json.js";
// export { MyQuestion } from "./MyQuestion";

interface Iquestion {
  type: string;
  name: string;
  visible: true;
  title: string;
}

interface Ipage {
  name: string;
  elements: Iquestion[];
}

interface Iconfig {
  title: string;
  progressBarType: string;
  showProgressBar: string;
  pages: Ipage[];
}

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({});

  const m_json: Iconfig = {
    title: "무슨무슨검사",
    progressBarType: "defaults",
    showProgressBar: "top",
    pages: [],
  };

  useEffect(() => {
    Api.getSurvey("test")
      .then((info) => {
        setInfo(m_json);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setInfo(json); // for test
      });
  });

  StylesManager.applyTheme("modern");

  const history = useHistory();
  //설문조사 데이터
  const surveyData = {
    title: "Test Form",
    contents: "테스트 데이터입니다.",
  };

  const surveyPages = 10; //SurveyModel.pageCount
  const [surveyCursor, setCursor] = useState(0); //SurveyModel.currentPageNo

  const updateCursor = (cursor: number) => {
    if (0 <= cursor && cursor < surveyPages) {
      window.scrollTo(0, 0);
      setCursor(cursor);
    }
  };

  const onCurrentPageChanged = (result: SurveyModel, options: any) => {
    console.log("value changed!");
    console.log(result.currentPageNo);
    // updateCursor(result.currentPageNo + 1);
  };

  const onComplete = (result: SurveyModel) => {
    console.log("Complete! " + result);
  };
  const onAfterRenderSurvey = (result: SurveyModel, options: any) => {
    console.log(result);
  };

  return (
    <>
      <Nav
        type={surveyCursor === 0 ? "transparent" : ""}
        title={surveyCursor === 0 ? "" : surveyData.title}
      >
        <button className="flat" onClick={() => move(history, "/Survey")}>
          나가기
        </button>
      </Nav>

      <div className="column_container spread_row">
        <button className="flat" onClick={() => updateCursor(surveyCursor - 1)}>
          {/* <img src={LeftArrow} alt="<" /> */}
        </button>
        <div>
          {surveyCursor === 0 ? (
            <div className="big_card">
              <h2>{surveyData.title}</h2>
              <p>
                {surveyData.contents}
                <br />
                {isLoading ? "로딩중" : "로딩완료"}
              </p>
              <button onClick={() => updateCursor(surveyCursor + 1)}>
                시작하기
              </button>
            </div>
          ) : (
            <>
              <Survey
                model={new Model(info)}
                onComplete={onComplete}
                pagePrevText="이전"
                pageNextText="다음"
                completeText="제출하기"
                onCurrentPageChanged={onCurrentPageChanged}
                onAfterRenderSurvey={onAfterRenderSurvey}
              />

              {/* <div className="button_layout">
                <button onClick={() => updateCursor(surveyCursor - 1)}>
                  이전
                </button>
                {surveyCursor < surveyPages - 1 ? (
                  <button onClick={() => updateCursor(surveyCursor + 1)}>
                    다음
                  </button>
                ) : (
                  <button onClick={() => move(history, "/Survey")}>
                    저장하기
                  </button>
                )}
              </div> */}
            </>
          )}
          {/* <SurveySlider
            current={surveyCursor}
            length={surveyPages}
            moveFunc={(index) => updateCursor(index)}
          /> */}
        </div>
        <button className="flat" onClick={() => updateCursor(surveyCursor + 1)}>
          {/* <img src={RightArrow} alt=">" /> */}
        </button>
      </div>
    </>
  );
};

export default Page;
