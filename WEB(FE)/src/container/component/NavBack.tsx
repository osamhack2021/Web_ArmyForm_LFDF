import { useHistory } from "react-router";
import LeftArrow from "static/left-arrow.png";

const Navbar = () => {
  const history = useHistory();
  return (
    <nav className="simple_nav">
      <button className="flat" onClick={() => history.push("/")}>
        <img src={LeftArrow} alt="<" />
      </button>
    </nav>
  );
};

export default Navbar;
