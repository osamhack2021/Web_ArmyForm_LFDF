import React, { useState } from "react";

import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";
import Plus from "static/plus.png";
import Save from "static/save.png";
import Eye from "static/eye.png";
import Pen from "static/pen.png";

import Nav from "container/component/Nav";
import SurveySlider from "container/component/SurveySlider";

//설문조사 데이터
const SurveyData = [
  {
    title: "Test Form",
    contents: "테스트 데이터입니다.",
  },
];

const SurveyCreate = () => {
  const [SurveyPages, setSurveyPages] = useState(SurveyData.length);
  const [SurveyCursor, setCursor] = useState(0);
  const [editMode, setEditMode] = useState(true);

  function updateCursor(cursor: number) {
    if (0 <= cursor && cursor < SurveyPages) {
      window.scrollTo(0, 0);
      setCursor(cursor);
    }
  }

  function addPage() {
    SurveyData.push(
      {
        title: "Test Form",
        contents: "테스트 데이터입니다.",
      }
    );

    window.scrollTo(0, 0);
    setCursor(SurveyCursor + 1);
    setSurveyPages(SurveyPages + 1);
  }

  return (
    <>
      <Nav type="" title={SurveyData[0].title}>
        <button className="flat" onClick={() => setEditMode(!editMode)}>
          { editMode ?
            <img src={Eye} alt="keep" />
            :
            <img src={Pen} alt="edit" />
          }
        </button>
        <button className="flat">
          <img src={Save} alt="save" />
        </button>
      </Nav>

      <div className="spread_row background_green">
        <button className="flat" onClick={() => updateCursor(SurveyCursor -1)}>
          { SurveyCursor === 0 ?
            <img className="invisible" src={LeftArrow} alt="<" />
            :
            <img src={LeftArrow} alt="<" />
          }
        </button>
        <div>
          <div className="big_card">
            { SurveyCursor === 0 ?
              <>
                <h2>{SurveyData[0].title}</h2>
                <p>{SurveyData[0].contents}</p>
              </>
              :
              <>
                <h2>{SurveyData[0].title}</h2>
              </>
            }
            <SurveySlider
              current={SurveyCursor}
              length={SurveyPages}
              moveFunc={(index) => updateCursor(index)}
            />
          </div>
        </div>
        { SurveyCursor === SurveyPages-1 ?
          <button className="flat" onClick={() => addPage()}>
            <img src={Plus} alt="+" />
          </button>
          :
          <button className="flat" onClick={() => updateCursor(SurveyCursor +1)}>
              <img src={RightArrow} alt=">" />
          </button>
        }
      </div>
    </>
  );
};

export default SurveyCreate;
