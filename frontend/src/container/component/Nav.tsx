import React from "react";

import Logo from "static/logo.png";

interface Inav {
  children: any;
  type: string;
  title: string;
}

function Nav(props: any) {
  const { children = null, type = "", title = "" }: Inav = props;

  return (
    <div id="nav_container">
      <nav className={type}>
        <div>
          <div>
            <img id="icon" src={Logo} alt="icon" />
            <h1> {title} </h1>
          </div>
          <div> {children} </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
