import React from "react";

import Logo from "static/logo.png";

import "style/Main.scss";

const Main = () => {
  return (
    <>
      <div class="background_lightgreen">
        <div id="nav_container">
          <nav className="transparent">
            <div>
              <img id="icon" src={Logo} alt="ArmyForm" />
              <div>
                <button className="flat">Sign up</button>
                <button className="flat">Sign in</button>
              </div>
            </div>
          </nav>
        </div>
        <div id="title_container">
          <div>
            <h1>ArmyForm</h1>
            <h2>용사들이 만들어나가는 더 나은 부대</h2>
          </div>
        </div>
      </div>

      <div>
				<div class="column_container">
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

			<div class="background_gray">
				<div class="column_container">
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

			<footer>
				<div>footer</div>
			</footer>
    </>
  );
};

export default Main;
