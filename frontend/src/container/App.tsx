import { BrowserRouter as Router, Switch } from "react-router-dom";
import "style/App.scss";

import NavBar from "container/component/NavBar";

import { RouteWithSubRoutes } from "shared/components";

import routes from "./route";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>App Component</h1>

        <NavBar />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        {/* <Switch>
          <Route exact path={LOGIN.route}>
            <h1>{LOGIN.name}</h1>
          </Route>
          <Route path={MAIN.route}>
            <h1>{MAIN.name}</h1>
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
};

export default App;
