import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RouteWithSubRoutes from "shared/components/RouteWithSubRoutes";
import _404 from "shared/components/_404";
import routes from "shared/constants/routes";

import NavBar from "container/component/NavBar";

import "style/App.scss";
import Footer from "./component/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          {routes.map((route, i) => {
            return <RouteWithSubRoutes key={i} {...route} />;
          })}
          <Route path="*" component={_404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
