import { Route } from "react-router-dom";

interface IRoute {
  name: string;
  path: string;
  exact: boolean;
  subRoutes: Array<any>;
  component: (props: any) => JSX.Element;
}

const RouteWithSubRoutes = (route: IRoute) => {
  return (
    <>
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
