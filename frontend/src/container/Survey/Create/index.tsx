import React, { useState } from "react";

import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";
import Plus from "static/plus.png";
import Save from "static/save.png";
import Eye from "static/eye.png";
import Pen from "static/pen.png";

import Nav from "container/component/Nav";
import SurveySlider from "container/component/SurveySlider";
import AddWidget from "container/component/Create/AddWidget";
import EditableWidget from "container/component/Create/EditableWidget";

const SurveyCreate = () => {
  const [SurveyData, setSurveyData]
    = useState([
      [
        {
          type: "title",
          value: "Test Form",
          elements: [],
        },
        {
          type: "p",
          value: "테스트 데이터입니다.",
          elements:[],
        }
      ],
    ]);
  const [SurveyPages, setSurveyPages] = useState(SurveyData.length);
  const [SurveyCursor, setCursor] = useState(0);
  const [editMode, setEditMode] = useState(true);

  const updateCursor = (cursor: number) => {
    if (0 <= cursor && cursor < SurveyPages) {
      window.scrollTo(0, 0);
      setCursor(cursor);
    }
  }

  const addSurveyWidget = (index: number) => {
    let data = [...SurveyData];

    data[SurveyCursor].splice(index, 0,
      {
        type: "checkbox",
        value: "설문제목",
        elements:[
          "1번 요소",
          "2번 요소",
          "3번 요소"
        ],
      }
    );

    setSurveyData(data);
  }

  const addPage = () => {
    SurveyData.push(
      [
        {
          type: "title",
          value: "페이지 이름",
          elements:[],
        },
        {
          type: "p",
          value: "테스트 데이터입니다.",
          elements:[],
        }
      ]
    );

    window.scrollTo(0, 0);
    setCursor(SurveyCursor + 1);
    setSurveyPages(SurveyPages + 1);
  }

  const onValueChanged = (e: any) => {
    const target = e.target.id.split("*").map((value: any, index: number) => {
      return Number(value);
    })
    
    let data = [...SurveyData];
    if(target.length <= 2 || target[2] === 0)
      data[target[0]][target[1]].value = e.target.value;
    else if(target[2] === -1)
      data[target[0]][target[1]].type = e.target.value;
    else
      data[target[0]][target[1]].elements[target[2]-1].value = e.target.value;
    
    if(e.target.tagName === "textarea"){
      e.target.style.height='1px';
      e.target.style.height = e.target.scrollHeight + 'px';
    }

    setSurveyData(data);
  }

  const onDelete = (index: number[]) => {
    console.log(index);
    let data = [...SurveyData];

    if(index.length <= 2){
      data[index[0]].splice(index[1], 1);
    }

    setSurveyData(data);
  }

  const drawSurveyWidgets = (data: any[][]) => {
    let result = [];

    result.push(<AddWidget clickFunc={() => addSurveyWidget(0)}/>);

    data[SurveyCursor].map((element, index) => {
      let widgetData = {
        ...SurveyData[SurveyCursor][index],
        index: [SurveyCursor, index],
      };
      
      result.push(
        <EditableWidget
          data={widgetData}
          onChange={onValueChanged}
          onDelete={onDelete} />
      );
      result.push(<AddWidget clickFunc={() => addSurveyWidget(index+1)}/>);
    })

    return result;
  }

  return (
    <>
      <Nav type="" title={SurveyData[0][0].value}>
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
            <div className={editMode ? "editable_layout" : "keep_layout"}>
              {drawSurveyWidgets(SurveyData)}
            </div>
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