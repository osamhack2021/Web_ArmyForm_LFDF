import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RouteWithSubRoutes from "shared/components/Route/RouteWithSubRoutes";
import _404 from "shared/components/Route/_404";
import routes from "shared/constants/routes";

// import NavBar from "shared/components/Route/RouteBar";

import "style/App.scss";
import Footer from "shared/components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
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
