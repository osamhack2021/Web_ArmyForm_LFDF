import React, { useState, useEffect } from "react";

import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";

import Nav from "container/component/Nav";
import SurveyCard from "container/component/SurveyCard";
import Slider from "container/component/Slider";

import Api from "shared/components/Api/Api";
import Loader from "shared/components/Api/Loader";

import test_json from "../../shared/constants/testdata/surveylist_json.js";

import "style/Survey.scss";

const Survey = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({});

  useEffect(() => {
    Api.getSurvey("test")
      .then((info) => {
        console.log(info);
        setInfo({});
        setIsLoading(false);
      })
      .catch((e) => {
        /* on fail */
        setIsLoading(false);
      });
  });

  let form_data = [test_json, test_json, test_json];
  let list_item_count = getComputedItemCount();

  const [page_list, setPageList] = useState(getComputedPageList());
  const [list_data, setListData] = useState(getComputedListData());

  function getComputedItemCount() {
    const CARD_WIDTH = 227;
    const Width = window.innerWidth;
    const availableWidth = (Width > 1820 ? 1820 : Width) - 180;
    let item_count = Math.floor(availableWidth / CARD_WIDTH);
    if (item_count <= 0) item_count = 1;

    return item_count;
  }

  function getComputedListData() {
    let result: any[][] = [[], [], []];
    for (let i = 0; i < 3; i++) {
      result[i] = test_json.slice(
        page_list[i].cursor * list_item_count,
        (page_list[i].cursor + 1) * list_item_count
      );
    }

    return result;
  }

  function getComputedPageList() {
    let page_list: any[] = [];
    for (let i = 0; i < 3; i++) {
      page_list[i] = {
        pages: Math.round(form_data[i].length / list_item_count),
        cursor: 0,
      };
    }

    return page_list;
  }

  function handleItemCount() {
    const currentItemCount = getComputedItemCount();

    if (list_item_count !== currentItemCount) {
      list_item_count = currentItemCount;
      setPageList(getComputedPageList());
      setListData(getComputedListData());
    }
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

  function changePage(index: number, cursor: number) {
    if (cursor < 0 || cursor >= page_list[index].pages) return;

    page_list[index].cursor = cursor;

    setPageList(page_list);
    setListData(getComputedListData());
  }

  if (isLoading) return <Loader />;

  return (
    <>
      <Nav type="" title="ArmyForm">
        <button className="flat">설문조사 추가</button>
      </Nav>

      <div className="background_green">
        {info}
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
              {list_data[0].map((item) => {
                return (
                  <SurveyCard
                    type={item.type}
                    name={item.name}
                    target={item.target}
                    deadline={item.deadline}
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
              {list_data[1].map((item) => {
                return (
                  <SurveyCard
                    type={0}
                    name={item.name}
                    target={item.target}
                    deadline={item.deadline}
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
              {list_data[2].map((item) => {
                return (
                  <SurveyCard
                    type={4}
                    name={item.name}
                    target={item.target}
                    deadline={item.deadline}
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
