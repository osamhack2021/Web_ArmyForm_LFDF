import React from "react";

import { useHistory } from "react-router-dom";

import Confirm from "static/confirm.png";
//import Copy from "static/copy.png";
//import Delete from "static/delete.png";
import Menu from "static/menu.png";
import Pen from "static/pen.png";
import Setting from "static/settings.png";

import "style/SurveyCard.scss";

interface Icard {
  type: Number;
  name: string;
  survey_id: string;
  // target: string;
  // deadline: number;
}
// target = "없습니다",
// deadline,
const SurveyCard = ({ type, name, survey_id }: Icard) => {
  // const CARD_RESURT = 0;
  const CARD_INCOMPLETED = 1;
  const CARD_PROCEEDING = 2;
  const CARD_COMPLETED = 3;
  const CARD_CREATE_INCOMPLETED = 4;
  const CARD_CREATE_PROCEEDING = 5;
  const CARD_CREATE_COMPLETED = 6;

  let buttonName;
  let statusClass = "card_circle ";
  let statusImage;
  // let d_day = "";
  // if (deadline) d_day = "D-" + deadline;

  switch (type) {
    case CARD_INCOMPLETED:
      buttonName = "시작하기";
      statusClass += "red";
      statusImage = Pen;
      break;
    case CARD_PROCEEDING:
      buttonName = "수정하기";
      statusClass += "yellow";
      statusImage = Pen;
      break;
    case CARD_COMPLETED:
      buttonName = "수정하기";
      statusClass += "green";
      statusImage = Confirm;
      break;
    case CARD_CREATE_INCOMPLETED:
      // d_day = "";
      buttonName = "수정하기";
      statusClass += "red";
      statusImage = Pen;
      break;
    case CARD_CREATE_PROCEEDING:
      buttonName = "결과확인";
      statusClass += "yellow";
      statusImage = Setting;
      break;
    case CARD_CREATE_COMPLETED:
      // d_day = "";
      buttonName = "결과확인";
      statusClass += "green";
      statusImage = Confirm;
      break;
    default:
      // d_day = "";
      buttonName = "결과보기";
      statusClass += "invisible";
      break;
  }

  const history = useHistory();

  const doAction = () => {
    switch (type) {
      case CARD_INCOMPLETED:
        // buttonName = "시작하기";
        history.push("/Survey/Page/" + survey_id);
        break;
      case CARD_PROCEEDING:
        buttonName = "수정하기";
        statusClass += "yellow";
        statusImage = Pen;
        break;
      case CARD_COMPLETED:
        buttonName = "수정하기";
        statusClass += "green";
        statusImage = Confirm;
        break;
      case CARD_CREATE_INCOMPLETED:
        // d_day = "";
        buttonName = "수정하기";
        statusClass += "red";
        statusImage = Pen;
        break;
      case CARD_CREATE_PROCEEDING:
        buttonName = "결과확인";
        statusClass += "yellow";
        statusImage = Setting;
        break;
      case CARD_CREATE_COMPLETED:
        // d_day = "";
        buttonName = "결과확인";
        statusClass += "green";
        statusImage = Confirm;
        break;
      default:
        // d_day = "";
        buttonName = "결과보기";
        statusClass += "invisible";
        break;
    }
  };

  return (
    <div className="card">
      <div className="card_top">
        <div>
          {/* <h4>{d_day}</h4> */}
          <div className="card_header_layout">
            <button className={statusClass}>
              <img className="card_icon" src={statusImage} alt=">" />
            </button>
            {type >= 4 ? (
              <button className="card_circle normal">
                <img className="card_icon" src={Menu} alt=">" />
              </button>
            ) : null}
          </div>
        </div>
        <h3>{name}</h3>
        {/* <p>대상: {target}</p> */}
      </div>
      <div className="card_bottom">
        <button className="card_rect" onClick={doAction}>
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default SurveyCard;
