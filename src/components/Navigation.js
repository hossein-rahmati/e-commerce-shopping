import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="w-full h-20 bg-black text-white  mb-8">
      <nav className="flex items-center h-full px-10">
        <ul className="flex items-center gap-x-6">
          <li>
            <NavLink className="navLinks" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLinks" activeClassName="active" to="/cart">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
