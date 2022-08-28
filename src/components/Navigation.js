import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="w-full h-16 bg-indigo-100">
      <nav className="flex justify-around items-center h-full">
        <ul className="flex items-center gap-x-6">
          <h2>folan shopping</h2>
          <li>
            <NavLink className="navLinks" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-x-10">
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
