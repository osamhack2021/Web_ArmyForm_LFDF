import React from "react";

import Logo from "static/logo.png";
import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";

import SurveySlider from "container/component/SurveySlider";

import "style/Survey/Page.scss";

const Page = () => {
  return (
    <>
      <div id="nav_container">
        <nav className="nav_only_left transparent">
          <div>
            <img id="icon" src={Logo} alt="ArmyForm" />
            <h1>FormName</h1>
          </div>
        </nav>
      </div>

      <div className="column_container spread_row">
        <button className="flat">
          <img src={LeftArrow} alt="<" />
        </button>
        <div>
          <div className="big_card">
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
            <button>시작하기</button>
          </div>
          <SurveySlider current={0} length={6} />
        </div>
        <button className="flat">
          <img src={RightArrow} alt=">" />
        </button>
      </div>

      <div className="spread_row column_container">
        <button className="flat">
          <img src={LeftArrow} alt="<" />
        </button>
        <div>
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
              <button>이전</button>
              <button>다음</button>
            </div>
          </div>
          <SurveySlider current={1} length={6} />
        </div>
        <button className="flat">
          <img src={RightArrow} alt=">" />
        </button>
      </div>

      <div className="spread_row column_container">
        <button className="flat">
          <img src={LeftArrow} alt="<" />
        </button>
        <div>
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
              <button>이전</button>
              <button>저장하기</button>
            </div>
          </div>
          <SurveySlider current={5} length={6} />
        </div>
        <button className="flat">
          <img src={RightArrow} alt=">" />
        </button>
      </div>
    </>
  );
};

export default Page;