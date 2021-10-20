import React, { useState } from "react";

import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";
import Save from "static/save.png";
import Eye from "static/eye.png";
import Pen from "static/pen.png";

import Nav from "container/component/Nav";
import SurveySlider from "container/component/SurveySlider";

import GraphSelector from "container/component/Dashboard/GraphSelector";

import SurveyData from "shared/constants/testdata/survey_result_json.js";
import SurveyOptimizer from "container/Survey/Dashboard/DataOptimizer";

import "style/Survey/DashboardWidget.scss";

//결과용 데이터 생산
SurveyOptimizer(SurveyData);

const getPageElements = (page: number) => {
  let result = [];

  for (let i = 0; i < SurveyData.pages[page].elements.length; i++) {
    const ElData = SurveyData.pages[page].elements[i];
    result.push(<h3>{(i+1) + ". " + ElData.title}</h3>);
    result.push(<GraphSelector data={ElData.value} />);
  }

  return result;
};

const Dashboard = () => {
  const SurveyPages = SurveyData.pages.length + 1;
  const [SurveyCursor, setCursor] = useState(0);
  const [editMode, setEditMode] = useState(true);

  function updateCursor(cursor: number) {
    if (0 <= cursor && cursor < SurveyPages) {
      window.scrollTo(0, 0);
      setCursor(cursor);
    }
  }

  return (
    <>
      <Nav type="" title={SurveyData.title}>
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
          <img src={LeftArrow} alt="<" />
        </button>
          <div className="big_card">
            { SurveyCursor === 0 ?
              <>
                <h2>{SurveyData.title}</h2>
                <p>{SurveyData.progressBarType}</p>
              </>
              :
              <div>{getPageElements(SurveyCursor -1)}</div>
            }
            <SurveySlider
              current={SurveyCursor}
              length={SurveyPages}
              moveFunc={(index) => updateCursor(index)}
            />
          </div>
        <button className="flat" onClick={() => updateCursor(SurveyCursor +1)}>
          <img src={RightArrow} alt=">" />
        </button>
      </div>
    </>
  );
};

export default Dashboard;