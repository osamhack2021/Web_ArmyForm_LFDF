import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { Survey, StylesManager, SurveyModel, Model } from "survey-react";
import Loader from "react-loader-spinner";

import Nav from "container/component/Nav";

import Api from "shared/components/Api/Api";
// import Loader from "shared/components/Api/Loader";

import test_json from "shared/constants/testdata/survey_json.js";

import "style/Survey/Page.scss";

// interface Iquestion {
//   type: string;
//   name: string;
//   visible: true;
//   title: string;
// }

// interface Ipage {
//   name: string;
//   elements: Iquestion[];
// }

// interface Iconfig {
//   title: string;
//   progressBarType: string;
//   showProgressBar: string;
//   pages: Ipage[];
// }

const Page = ({ match, location }: RouteComponentProps) => {
  const [isStart, setIsStart] = useState(false); //SurveyModel.currentPageNo
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    Api.getSurvey({ survey_id: (match.params as any).survey_id })
      .then((info) => {
        setInfo(Api.get(JSON.stringify(info)).result);
      })
      .catch((e) => {
        setIsError("서버와 접속이 되지않습니다.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [match.params]);

  StylesManager.applyTheme("modern");

  //설문조사 데이터
  const surveyData = {
    title: "Test Form",
    contents: "테스트 데이터입니다.",
  };

  const onCurrentPageChanged = (result: SurveyModel, options: any) => {
    console.log("value changed!");
    console.log(result.currentPageNo);
    // updateCursor(result.currentPageNo + 1);
  };

  const onComplete = (result: SurveyModel) => {
    console.log("Complete! ");
    console.log(result);
  };

  const onAfterRenderSurvey = (result: SurveyModel, options: any) => {
    console.log("render");
    console.log(result);
  };

  const onPartialSend = (result: SurveyModel) => {
    console.log("onsend");
    console.log({ id: (match.params as any).survey_id, json: result.data });
    Api.saveSurvey({ id: (match.params as any).survey_id, json: result.data })
      .then((info) => {
        console.log(info);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isLoading) return <Loader type="Oval" />;

  return (
    <>
      <Nav type="" title={isStart ? "" : surveyData.title} />

      <div className="column_container spread_row">
        <button className="flat" />

        <div className="big_card">
          {!isStart ? (
            <>
              {isError ? (
                <>
                  {isError}
                  <div
                    style={{ background: "green" }}
                    onClick={() => {
                      setIsError("");
                      setInfo(test_json);
                    }}
                  >
                    테스트용 설문 버튼입니다.
                  </div>
                </>
              ) : (
                <>
                  <h2>{surveyData.title}</h2>
                  <p>{surveyData.contents}</p>
                  <button onClick={() => setIsStart(true)}>시작하기</button>
                </>
              )}
            </>
          ) : (
            <>
              <Survey
                model={new Model(info)}
                onComplete={onComplete}
                pagePrevText="<< 이전"
                pageNextText="다음 >>"
                completeText="제출하기"
                onCurrentPageChanged={onCurrentPageChanged}
                onAfterRenderSurvey={onAfterRenderSurvey}
                onPartialSend={onPartialSend}
              />
            </>
          )}
        </div>
        <button className="flat" />
      </div>
    </>
  );
};

export default Page;
