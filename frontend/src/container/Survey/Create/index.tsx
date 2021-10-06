import React from "react";

import Logo from "static/logo.png";
import LeftArrow from "static/left-arrow.png";

import "style/Survey/Create.scss";

const SurveyCreate = () => {
  return (
    <>
      <div id="nav_container">
        <nav>
          <div>
            <div>
              <img id="icon" src={Logo} alt="ArmyForm" />
              <h1>FormName</h1>
            </div>
            <div>
              <button className="flat">미리보기</button>
              <button className="flat">저장</button>
              <button className="flat">나가기</button>
            </div>
          </div>
        </nav>
      </div>

      <div className="spread_row background_green">
        <button className="flat">
          <img src={LeftArrow} alt="<" />
        </button>
        <div>
          <div className="big_card">
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
            <div className="slider_layout">
              <button className="rect highlight" />
              <button className="circle normal" />
              <button className="circle normal" />
              <button className="circle normal" />
              <button className="circle normal" />
            </div>
          </div>
        </div>
        <button className="flat">
          <img src={LeftArrow} alt=">" />
        </button>
      </div>

      <footer>
        <div>footer</div>
      </footer>
    </>
  );
};

export default SurveyCreate;
