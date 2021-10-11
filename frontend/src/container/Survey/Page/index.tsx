import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import move from "shared/components/move";

import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";

import Nav from "container/component/Nav"
import SurveySlider from "container/component/SurveySlider";

import "style/Survey/Page.scss";

const Page = () => {
  const history = useHistory();
  //설문조사 데이터
  const SurveyData = [
    {
      title:"Test Form",
      contents:"테스트 데이터입니다."
    },
    {},
    {},
    {},
    {},
    {},
    {}
  ];

  const SurveyPages = SurveyData.length;
  const [ SurveyCursor, setCursor ] = useState(0);

  function updateCursor(cursor: number){
    if(0 <= cursor && cursor < SurveyPages){
      window.scrollTo( 0, 0 );
      setCursor(cursor);
    }
  }
  
  return (
    <>
      <Nav
        type={ SurveyCursor === 0 ? "transparent" : "" } 
        title={ SurveyCursor === 0 ? "" : SurveyData[0].title }
      >
        <button
          className="flat"
          onClick={ () => move(history, "/Survey") }
        >
          x
        </button>
      </Nav>

      <div className="column_container spread_row">
        <button
          className="flat"
          onClick={ () => updateCursor(SurveyCursor-1) }
        >
          <img src={LeftArrow} alt="<" />
        </button>
        <div>
          { SurveyCursor === 0 ?
            <div className="big_card">
              <h2>{ SurveyData[0].title }</h2>
              <p>{ SurveyData[0].contents }</p>
              <button onClick={ () => updateCursor(SurveyCursor+1) } >
                시작하기
              </button>
            </div>
            :
            <div>
              <h2>Form Name</h2>
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
              <div className="button_layout">
                <button onClick={ () => updateCursor(SurveyCursor-1) } >
                  이전
                </button>
                { SurveyCursor < SurveyPages-1 ?
                  <button onClick={ () => updateCursor(SurveyCursor+1) } >
                    다음
                  </button>
                  :
                  <button onClick={ () => move(history, "/Survey") } >
                    저장하기
                  </button>
                }
              </div>
            </div>
          }
          <SurveySlider
            current={ SurveyCursor }
            length={ SurveyPages }
            moveFunc={ (index) => updateCursor(index) }
          />
        </div>
        <button
          className="flat"
          onClick={ () => updateCursor(SurveyCursor+1) }
        >
          <img src={RightArrow} alt=">" />
        </button>
      </div>
    </>
  );
};

export default Page;