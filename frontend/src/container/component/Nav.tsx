import React from "react";
import { useHistory } from "react-router";
import User from "shared/components/User/User";

import Logo from "static/logo.png";

interface Inav {
  children: any;
  type: string;
  title: string;
}

function Nav(props: any) {
  const { children = null, type = "", title = "" }: Inav = props;
  const history = useHistory();

  return (
    <div id="nav_container">
      <nav className={type}>
        <div>
          <div>
            <img id="icon" src={Logo} alt="icon" />
            <h1> {title} </h1>
          </div>
          <div>
            {children}
            {User.getCurrentUser() ? (
              <>
                <button className="flat" onClick={() => history.push("/Survey")}>
                  설문조사
                </button>
                <button className="flat" onClick={() => history.push("/Mypage")}>
                  마이페이지
                </button>
                <button className="flat" onClick={() => history.push("/Logout")}>
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <button className="flat" onClick={() => history.push("/Signup")}>
                  Sign up
                </button>
                <button className="flat" onClick={() => history.push("/login")}>
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
