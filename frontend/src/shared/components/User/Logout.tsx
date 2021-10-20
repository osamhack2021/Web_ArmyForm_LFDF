import { useEffect } from "react";

import { Redirect } from "react-router-dom";
import User from "shared/components/User/User";

const Auth = () => {
  useEffect(() => {
    User.logout();
  });
  return <Redirect to={"/"} />;
};

export default Auth;
