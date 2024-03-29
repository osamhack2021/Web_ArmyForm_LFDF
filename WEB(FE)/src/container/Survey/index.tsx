import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";

import Nav from "container/component/Nav";
import SurveyCard from "container/component/SurveyCard";
import Slider from "container/component/Slider";

import Api from "shared/components/Api/Api";
import Loader from "shared/components/Api/Loader";
import Error from "shared/components/Route/Error";

// import test_json from "shared/constants/testdata/surveylist_json.js";

import "style/Survey.scss";

const Survey = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [survey_ongoing, setSurveyOngoing] = useState([
    {
      survey_id: "test",
      name: "Test",
      endTime: "2021-10-18T15:00:00.000Z",
      id: "730b6aa8-68d9-4d0c-b267-3e94b84092a1",
      ownerId: "7ef0d4bc-39d0-4467-854c-88b9eb352434",
      startTime: "2021-10-17T15:00:00.000Z",
    },
  ]);
  const [survey_result, setSurveyResult] = useState([
    {
      survey_id: "test",
      name: "Test",
      endTime: "2021-10-18T15:00:00.000Z",
      id: "730b6aa8-68d9-4d0c-b267-3e94b84092a1",
      ownerId: "7ef0d4bc-39d0-4467-854c-88b9eb352434",
      startTime: "2021-10-17T15:00:00.000Z",
    },
  ]);
  const [survey_created, setSurveyCreated] = useState([
    {
      survey_id: "test",
      name: "Test",
      endTime: "2021-10-18T15:00:00.000Z",
      id: "730b6aa8-68d9-4d0c-b267-3e94b84092a1",
      ownerId: "7ef0d4bc-39d0-4467-854c-88b9eb352434",
      startTime: "2021-10-17T15:00:00.000Z",
    },
  ]);

  const history = useHistory();

  let LIST_ITEM_COUNT = getComputedItemCount();

  function getComputedItemCount() {
    const CARD_WIDTH = 227;
    const Width = window.innerWidth;
    const availableWidth = (Width > 1820 ? 1820 : Width) - 180;
    let item_count = Math.floor(availableWidth / CARD_WIDTH);
    if (item_count <= 0) item_count = 1;

    return item_count;
  }

  const [page_list, setPageList] = useState(getComputedPageList());

  useEffect(() => {
    Api.getOwnerSurveyList()
      .then((result) => {
        setSurveyCreated(Api.get(JSON.stringify(result)));
      })
      .catch((e) => {
        console.log(e);
        setIsError("서버와 접속이 되지않습니다.[OWNER]");
      })
      .finally(() => {
        setIsLoading(false);
      });
    Api.getSurveyResult() // need to replace
      .then((result) => {
        setSurveyResult(Api.get(JSON.stringify(result)));
      })
      .catch((e) => {
        console.log(e);
        setIsError("서버와 접속이 되지않습니다.[RESULT]");
      })
      .finally(() => {
        setIsLoading(false);
      });
    Api.getUnitSurveyList()
      .then((result) => {
        setSurveyOngoing(Api.get(JSON.stringify(result)));
      })
      .catch((e) => {
        console.log(e);
        setIsError("서버와 접속이 되지않습니다.[UNIT]");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  /* 진행중인 설문, 설문 결과, 설문 제작 */

  function getComputedPageList() {
    return [
      {
        pages: Math.round(survey_ongoing.length / LIST_ITEM_COUNT),
        cursor: 0,
      },
      {
        pages: Math.round(survey_result.length / LIST_ITEM_COUNT),
        cursor: 0,
      },
      {
        pages: Math.round(survey_created.length / LIST_ITEM_COUNT),
        cursor: 0,
      },
    ];
  }

  useEffect(() => {
    function WindowListener() {
      window.addEventListener("resize", handleItemCount);
    }
    WindowListener();
    return () => {
      window.removeEventListener("resize", handleItemCount);
    };
  });

  function handleItemCount() {
    const currentItemCount = getComputedItemCount();

    if (LIST_ITEM_COUNT !== currentItemCount) {
      LIST_ITEM_COUNT = currentItemCount;
      setPageList(getComputedPageList());
    }
  }

  function changePage(index: number, cursor: number) {
    if (cursor < 0 || cursor >= page_list[index].pages) return;
    page_list[index].cursor = cursor;
    setPageList(page_list);
  }

  function unitTimeCalc(starttime: string, endtime: string) {
    if (new Date() < new Date(starttime)) {
      return 1;
    } else if (new Date() < new Date(endtime)) {
      return 2;
    } else {
      return 3;
    }
  }
  // function timeCalc() {}
  function ownerTimeCalc(starttime: string, endtime: string) {
    if (new Date() < new Date(starttime)) {
      return 4;
    } else if (new Date() < new Date(endtime)) {
      return 5;
    } else {
      return 6;
    }
  }

  if (isLoading) return <Loader />;
  if (isError) return <Error e={isError} />;

  return (
    <>
      <Nav type="" title="ArmyForm">
        <button className="flat" onClick={() => history.push("/Survey/Create")}>
          설문조사 추가
        </button>
      </Nav>

      <div className="background_green">
        <div className="wide_column_container">
          <h2>진행중인 설문</h2>
          <div className="card_layout">
            <button
              className="flat"
              onClick={() => changePage(0, page_list[0].cursor - 1)}
            >
              <img src={LeftArrow} alt="<" />
            </button>
            <div className="card_list">
              {survey_ongoing
                .slice(
                  page_list[0].cursor * LIST_ITEM_COUNT,
                  (page_list[0].cursor + 1) * LIST_ITEM_COUNT
                )
                .map((item, idx) => {
                  return (
                    <SurveyCard
                      type={unitTimeCalc(item.startTime, item.endTime)}
                      name={item.name}
                      id={item.id}
                      // target={item.target}
                      // deadline={item.deadline}
                    />
                  );
                })}
            </div>
            <button
              className="flat"
              onClick={() => changePage(0, page_list[0].cursor + 1)}
            >
              <img src={RightArrow} alt=">" />
            </button>
          </div>
          <Slider
            current={page_list[0].cursor}
            length={page_list[0].pages}
            moveFunc={(cursor) => changePage(0, cursor)}
          />
        </div>
      </div>

      <div>
        <div className="wide_column_container">
          <h2>설문 결과</h2>
          <div className="card_layout">
            <button
              className="flat"
              onClick={() => changePage(1, page_list[1].cursor - 1)}
            >
              <img src={LeftArrow} alt="<" />
            </button>
            <div className="card_list">
              {survey_result
                .slice(
                  page_list[1].cursor * LIST_ITEM_COUNT,
                  (page_list[1].cursor + 1) * LIST_ITEM_COUNT
                )
                .map((item) => {
                  return (
                    <SurveyCard
                      type={0}
                      name={item.name}
                      id={item.id}
                      // target={item.target}
                      // deadline={item.deadline}
                    />
                  );
                })}
            </div>
            <button
              className="flat"
              onClick={() => changePage(1, page_list[1].cursor + 1)}
            >
              <img src={RightArrow} alt=">" />
            </button>
          </div>
          <Slider
            current={page_list[1].cursor}
            length={page_list[1].pages}
            moveFunc={(cursor) => changePage(1, cursor)}
          />
        </div>
      </div>

      <div className="background_green">
        <div className="wide_column_container">
          <h2>제작한 설문</h2>
          <div className="card_layout">
            <button
              className="flat"
              onClick={() => changePage(2, page_list[2].cursor - 1)}
            >
              <img src={LeftArrow} alt="<" />
            </button>
            <div className="card_list">
              {survey_created
                .slice(
                  page_list[2].cursor * LIST_ITEM_COUNT,
                  (page_list[2].cursor + 1) * LIST_ITEM_COUNT
                )
                .map((item) => {
                  return (
                    <SurveyCard
                      type={ownerTimeCalc(item.startTime, item.endTime)}
                      name={item.name}
                      id={item.id}
                      // target={item.target}
                      // deadline={item.deadline}
                    />
                  );
                })}
            </div>
            <button
              className="flat"
              onClick={() => changePage(2, page_list[2].cursor + 1)}
            >
              <img src={RightArrow} alt=">" />
            </button>
          </div>
          <Slider
            current={page_list[2].cursor}
            length={page_list[2].pages}
            moveFunc={(cursor) => changePage(2, cursor)}
          />
        </div>
      </div>
    </>
  );
};

export default Survey;
