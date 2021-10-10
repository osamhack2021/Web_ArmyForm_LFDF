import React, { useState, useEffect } from "react";

import Logo from "static/logo.png";
import LeftArrow from "static/left-arrow.png";
import RightArrow from "static/right-arrow.png";

import SurveyCard from "container/component/SurveyCard";
import Slider from "container/component/Slider";

import "style/Survey.scss";

const Survey = () => {
  //Survey Data
  const data = [
    {
      type: 1,
      name: "전 군 성폭력 예방 설문조사",
      target: "전 군",
      deadline: 1,
    },
    {
      type: 2,
      name: "사이버네트워크작전센터 부대정밀진단 설문조사",
      target: "사이버네트워크작전센터 전 장병",
      deadline: 3,
    },
    {
      type: 3,
      name: "부대종합전투력측정 참가자 모집",
      target: "사이버네트워크작전센터 전 장병",
      deadline: 5,
    },
    {
      type: 4,
      name: "9월 급양 선호도 설문조사",
      target: "10급양대 급양대상 전 장병",
      deadline: 7,
    },
    {
      type: 5,
      name: "9월 급양 선호도 설문조사",
      target: "10급양대 급양대상 전 장병",
      deadline: 9,
    },
    {
      type: 6,
      name: "9월 급양 선호도 설문조사",
      target: "10급양대 급양대상 전 장병",
      deadline: 11,
    },
    {
      type: 0,
      name: "9월 급양 선호도 설문조사",
      target: "10급양대 급양대상 전 장병",
      deadline: 13,
    },
    {
      type: 4,
      name: "9월 급양 선호도 설문조사",
      target: "10급양대 급양대상 전 장병",
      deadline: 15,
    },
  ];

  let form_data = [ data, data, data ];
  let list_item_count = getComputedItemCount();
  const [page_list, setPageList] = useState(getComputedPageList());
  const [list_data, setListData] = useState(getComputedListData());

  function getComputedItemCount(){
    const CARD_WIDTH = 227;
    const Width = window.innerWidth;
    const availableWidth = 
      (Width > 1820 ? 1820 : Width) - 180;
    let item_count = Math.floor(availableWidth / CARD_WIDTH);
    if (item_count <= 0) item_count = 1;

    return item_count;
  }

  function getComputedListData(){
    let result: any[][] = [ [], [], [] ];
    form_data.map( (data, index) => {
      result[index] = data.slice(
        page_list[index].cursor * list_item_count,
        (page_list[index].cursor + 1) * list_item_count
      );
    });

    return result;
  }

  function getComputedPageList(){
    let page_list: any[] = [];
    for(let i = 0; i < 3; i++){
      page_list[i] = {
        pages: Math.round(form_data[i].length / list_item_count),
        cursor: 0,
      };
    }

    return page_list;
  }

  function handleItemCount() {
    const currentItemCount = getComputedItemCount();

    if(list_item_count !== currentItemCount){
      list_item_count = currentItemCount;
      setPageList(getComputedPageList())
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

  function changePage(index: number, cursor: number){
    if(cursor < 0 || cursor >= page_list[index].pages) return;

    page_list[index].cursor = cursor;

    setPageList(page_list);
    setListData(getComputedListData());
  }

  return (
    <>
      <div id="nav_container">
        <nav>
          <div>
            <div>
              <img id="icon" src={Logo} alt="ArmyForm" />
              <h1>ArmyForm</h1>
            </div>
            <div>
              <button className="flat">+</button>
              <button className="flat">마이페이지</button>
            </div>
          </div>
        </nav>
      </div>

      <div className="background_green">
        <div className="wide_column_container">
          <h2>진행중인 설문</h2>
          <div className="card_layout">
            <button
              className="flat"
              onClick={ () => changePage(0, page_list[0].cursor-1) }
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
              onClick={ () => changePage(0, page_list[0].cursor+1) }
            >
              <img src={RightArrow} alt=">" />
            </button>
          </div>
          <Slider
            current={page_list[0].cursor}
            length={page_list[0].pages}
            moveFunc={ (cursor) => changePage(0, cursor) }
          />
        </div>
      </div>

      <div>
        <div className="wide_column_container">
          <h2>설문 결과</h2>
          <div className="card_layout">
            <button
              className="flat"
              onClick={ () => changePage(1, page_list[1].cursor-1) }
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
              onClick={ () => changePage(1, page_list[1].cursor+1) }
            >
              <img src={RightArrow} alt=">" />
            </button>
          </div>
          <Slider
            current={page_list[1].cursor}
            length={page_list[1].pages}
            moveFunc={ (cursor) => changePage(1, cursor) }
          />
        </div>
      </div>

      <div className="background_green">
        <div className="wide_column_container">
          <h2>제작한 설문</h2>
          <div className="card_layout">
            <button
              className="flat"
              onClick={ () => changePage(2, page_list[2].cursor-1) }
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
              onClick={ () => changePage(2, page_list[2].cursor+1) }
            >
              <img src={RightArrow} alt=">" />
            </button>
          </div>
          <Slider
            current={page_list[2].cursor}
            length={page_list[2].pages}
            moveFunc={ (cursor) => changePage(2, cursor) }
          />
        </div>
      </div>

      <footer>
        <div>footer</div>
      </footer>
    </>
  );
}

export default Survey;