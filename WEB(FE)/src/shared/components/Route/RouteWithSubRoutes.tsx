import { Route } from "react-router-dom";
import Auth from "../User/Auth";

interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  needAuth: boolean;
  subRoutes: Array<any>;
  component: (props: any) => JSX.Element;
}

const RouteWithSubRoutes = (route: IRoute) => {
  return (
    <>
      {route.needAuth ? <Auth /> : ""}
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component {...props} />}
      />
      {route.subRoutes.map((inner, i) => (
        <RouteWithSubRoutes key={i} {...inner} />
      ))}
    </>
  );
};

export default RouteWithSubRoutes;
