import { Redirect } from "react-router-dom";
import User from "shared/components/User/User";

const Auth = () => {
  return <>{User.getCurrentUser() ? <></> : <Redirect to={"/Login"} />}</>;
};

export default Auth;
