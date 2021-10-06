import { useHistory } from "react-router";
import move from "shared/components/move";
import LeftArrow from "static/left-arrow.png";

const Navbar = () => {
  const history = useHistory();
  return (
    <nav className="simple_nav">
      <button className="flat" onClick={() => move(history, "/")}>
        <img id="back_icon" src={LeftArrow} alt="<" />
      </button>
    </nav>
  );
};

export default Navbar;
