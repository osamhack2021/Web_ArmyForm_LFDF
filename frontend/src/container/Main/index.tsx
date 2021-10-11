import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import move from "shared/components/move";

import Nav from "container/component/Nav"

import "style/Main.scss";

const Main = () => {
  const history = useHistory();

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
      <div className= "background_lightgreen">
        <Nav
          type={ NavColored ? "" : "transparent" }
        >
          <button
            className="flat"
            onClick={() => move(history, "/Signup")}
          >
            Sign up
          </button>
          <button
            className="flat"
            onClick={() => move(history, "/Login")}
          >
            Sign in
          </button>
        </Nav>
        <div id="title_container">
          <div>
            <h1>ArmyForm</h1>
            <h2>용사들이 만들어나가는 더 나은 부대</h2>
          </div>
        </div>
      </div>

      <div>
        <div className="column_container">
          <h3>기능제목</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button>체험하기</button>
        </div>
      </div>

      <div className="background_gray">
        <div className="column_container">
          <h3>기능제목</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button>시작하기</button>
        </div>
      </div>
    </>
  );
};

export default Main;
