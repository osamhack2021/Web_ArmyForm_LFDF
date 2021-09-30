import { Link } from "react-router-dom";

import routeConstants from "shared/constants/routes";

const navItems = Object.values(routeConstants);

const Navbar = () => {
  return (
    <ul className="App-nav-list">
      {navItems.map((navItem, idx) => (
        <li key={idx} className="App-nav-item">
          <Link to={navItem.route}>{navItem.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
