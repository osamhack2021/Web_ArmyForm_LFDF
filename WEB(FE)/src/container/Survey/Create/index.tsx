import React, { ChangeEvent, useState } from "react";

import { useHistory } from "react-router-dom";

import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";
import Plus from "static/plus.png";
import Save from "static/save.png";
import Eye from "static/eye.png";
import Pen from "static/pen.png";

import Nav from "container/component/Nav";
import SurveySlider from "container/component/SurveySlider";

import Api from "shared/components/Api/Api";

const SurveyCreate = () => {
  const history = useHistory();
  const [SurveyCursor, setSurveyCursor] = useState(0);
  const [editMode, setEditMode] = useState(true);
  const [toggle, setToggle] = useState(0);
  const SurveyType = [
    {
      type: "text",
      name: "1-1",
      visible: true,
      title: "당신의 이름은 무엇입니까",
    },
    {
      type: "dropdown",
      name: "1-2",
      visible: true,
      title: "당신의 성별은 무엇입니까",
      choices: ["남성", "여성"],
    },
  ];

  const SurveyTypeDefault = (type: number, question: number) => {
    let _SurveyType = SurveyType[type];
    _SurveyType.name = SurveyCursor + "-" + question;
    return _SurveyType;
  };

  const [SurveyData, setSurveyData] = useState({
    title: "test",
    progressBarType: "defaults",
    showProgressBar: "top",
    sendResultOnPageNext: true,
    pages: [
      {
        name: "Test Form",
        elements: [SurveyTypeDefault(0, 0)],
      },
    ],
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [SurveyPages, setSurveyPages] = useState([
    {
      name: "Test Form",
      elements: [SurveyTypeDefault(0, 0)],
    },
  ]);

  function updateCursor(cursor: number) {
    if (0 <= cursor && cursor < SurveyPages.length + 1) {
      window.scrollTo(0, 0);
      setSurveyCursor(cursor);
    }
  }

  function addPage() {
    window.scrollTo(0, 0);
    SurveyPages.push({
      name: SurveyCursor.toString(),
      elements: [SurveyTypeDefault(0, SurveyCursor)],
    });
    setSurveyPages(SurveyPages);
    setSurveyCursor(SurveyCursor + 1);
  }

  function removePage() {
    SurveyPages.splice(SurveyCursor, 1);
    window.scrollTo(0, 0);
    setSurveyPages(SurveyPages);
    setSurveyCursor(SurveyCursor - 1);
  }

  const handleSave = () => {
    SurveyData.pages = SurveyPages;
    Api.createSurvey({
      name: SurveyData.title,
      json: JSON.stringify(SurveyData),
      startline: startDate,
      deadline: endDate,
    }).then((info) => {
      alert("저장되었습니다.");
      history.push("/Survey");
    });
  };

  const handleToggle = (e: ChangeEvent<HTMLSelectElement>) => {
    setToggle(Number(e.target.value));
  };

  const addQuestion = () => {
    SurveyPages[SurveyCursor - 1].elements.push(
      SurveyTypeDefault(toggle, SurveyCursor - 1)
    );
    setSurveyPages([...SurveyPages]);
  };

  const deleteQuestion = (question: number) => {
    SurveyPages[SurveyCursor - 1].elements.splice(question, 1);
    setSurveyPages([...SurveyPages]);
  };

  const addSelect = (question: number) => {
    SurveyPages[SurveyCursor - 1].elements[question].choices?.push("");
    setSurveyPages([...SurveyPages]);
  };

  const deleteSelect = (question: number, answer: number) => {
    console.log(answer);
    SurveyPages[SurveyCursor - 1].elements[question].choices?.splice(
      answer - 1,
      1
    );
    setSurveyPages([...SurveyPages]);
  };

  const handleDropdown = (
    e: ChangeEvent<HTMLInputElement>,
    question: number,
    answer: number
  ) => {
    // let a = { [e.target.name]: e.target.value };
    (SurveyPages[SurveyCursor - 1].elements[question].choices as string[])[
      answer
    ] = e.target.value;
    setSurveyPages([...SurveyPages]);
  };

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    SurveyData.title = e.target.value;
    setSurveyData({ ...SurveyData });
  };

  const handleQuestionTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const question = parseInt(e.target.name);
    SurveyPages[SurveyCursor - 1].elements[question].title = e.target.value;
    setSurveyData({ ...SurveyData });
  };


  const handleSDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(new Date(e.target.value));
  };

  const handleEDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(new Date(e.target.value));
  };
  return (
    <>
      <Nav type="" title={SurveyData.title}>
        <button className="flat" onClick={() => setEditMode(!editMode)}>
          {editMode ? (
            <img src={Eye} alt="keep" />
          ) : (
            <img src={Pen} alt="edit" />
          )}
        </button>
        <button className="flat">
          <img src={Save} alt="save" onClick={handleSave} />
        </button>
      </Nav>

      <div className="spread_row background_green">
        <button className="flat">
          <img
            className={SurveyCursor === 0 ? "invisible" : ""}
            src={LeftArrow}
            alt="<"
            onClick={() => updateCursor(SurveyCursor - 1)}
          />
          <div
            className={SurveyCursor === 0 ? "invisible" : ""}
            onClick={removePage}
          >
            삭제
          </div>
        </button>
        <div>
          <div className="big_card">
            {SurveyCursor === 0 ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={SurveyData.title}
                  placeholder="설문조사 제목"
                  onChange={(e) => handleTitle(e)}
                />
                시작기한
                <input
                  type="date"

                  name="start"
                  onChange={(e) => handleSDate(e)}
                />
                마감기한
                <input
                  type="date"
                  name="end"
                  onChange={(e) => handleEDate(e)}
                />
              </>
            ) : (
              <>
                - {SurveyCursor}페이지 -
                <br />
                {SurveyPages[SurveyCursor - 1].elements.map((e, idx) => {
                  return (
                    <div key={idx}>
                      {"<"}
                      {idx + 1}번 질문{">"}
                      <input
                        type="text"
                        name={idx.toString()}
                        value={e.title}
                        placeholder={idx + 1 + "번 질문 제목"}
                        onChange={handleQuestionTitle}
                      />
                      <button onClick={() => deleteQuestion(idx)}>
                        {idx + 1}번 질문 삭제
                      </button>
                      {/* IF TEXT */}
                      {e.type === "text" ? <div></div> : ""}
                      {/* IF DROPDOWN*/}
                      {e.type === "dropdown" ? (
                        <>
                          {e.choices?.map((e2, idx2) => (
                            <div key={idx2}>
                              <input
                                type="text"
                                value={e2}
                                placeholder={
                                  idx +
                                  1 +
                                  "번 질문 " +
                                  (idx2 + 1) +
                                  "번 선택지"
                                }
                                onChange={(e) => handleDropdown(e, idx, idx2)}
                              />
                              <button onClick={() => deleteSelect(idx, idx2)}>
                                {idx + 1}번 질문의 {idx2 + 1}번 선택지 삭제
                              </button>
                            </div>
                          ))}
                          <button onClick={() => addSelect(idx)}>
                            {idx + 1}번 질문의 선택지 추가
                          </button>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
                <select onChange={handleToggle}>
                  <option value={0}>서술형</option>
                  <option value={1}>객관식</option>
                </select>
                <button onClick={addQuestion}>질문 추가</button>
              </>
            )}
            <SurveySlider
              current={SurveyCursor}
              length={SurveyPages.length + 1}
              moveFunc={(index) => updateCursor(index)}
            />
          </div>
        </div>
        {SurveyCursor === SurveyPages.length ? (
          <button className="flat">
            <img src={Plus} alt="+" onClick={addPage} />
          </button>
        ) : (
          <button className="flat">
            <img
              src={RightArrow}
              alt=">"
              onClick={() => updateCursor(SurveyCursor + 1)}
            />
          </button>
        )}
      </div>
    </>
  );
};

export default SurveyCreate;
