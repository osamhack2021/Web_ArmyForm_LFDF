import React, { useState, useEffect } from "react";

import Nav from "container/component/Nav";

import "style/Main.scss";

//메인 페이지 디자인 생각해보기 & 찾아보기
//소개 페이지에서 넣을 문구 생각 해보기
//Footer 디자인 찾아보기

const Main = () => {
  const [NavColored, setNavColored] = useState(false);

  function handleScroll() {
    setNavColored(window.pageYOffset > 279);
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div className="background_lightgreen">
        <Nav title="" type={NavColored ? "" : "transparent"} />
        <div id="title_container">
          <div>
            <h1>ArmyForm</h1>
            <h2>용사들이 만들어나가는 더 나은 부대</h2>
          </div>
        </div>
      </div>

      <div>
        <div className="column_container">
          <h3>프로젝트 소개</h3>
          <p>
            Army Form은 용사들이 부대를 직접 만들어 나간다는 의미를 담고 있는 프로젝트입니다.
            최근 이슈가 된 병영 식당을 선두로 해서 많은 용사들이 부대에 갖고 있던 건의사항을 듣고,
            이를 각 부대 지휘관에게 효율적으로 전달할 수 있는 어플리케이션 개발을 목표로 하고 있습니다.
            군 부대에서 사용하기 적합하고 광범위한 용도에 설문조사 프로그램입니다.
          </p>
          <button>체험하기</button>
        </div>
      </div>

      <div className="background_gray">
        <div className="column_container">
          <h3>기능 설명</h3>
          <p>
            설문조사 생성하기
            간편하게 사용할 수 있는 기본적인 설문지 제공
            여러가지 형태의 질문 제공

            설문조사 참여하기
            현재 참여할 수 있는 설문지를 한 눈에 볼 수 있는 대쉬보드 제공
            참여한 설문조사의 결과 확인 가능
            설문조사의 남은 기한 확인 가능

            설문조사 결과보기
            각 질문 형태에 따른 일반적인 수치, 그래프 또는 워드클라우드로 결과 제공
            필요에 따라 EXCEL, SVC으로 저장 기능 제공
          </p>
          <button>시작하기</button>
        </div>
      </div>
    </>
  );
};

export default Main;
