import { NavLink } from "react-router-dom";
import { useCart } from "../providers/CartProvider";

const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="w-full h-20 bg-slate-700 text-white mb-8">
      <nav className="flex items-center justify-between h-full px-3 sm:px-10">
        <ul className="flex items-center gap-x-6">
          <li>
            <NavLink className="navLinks" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLinks" activeClassName="active" to="/cart">
              Cart
              <span className="rounded-full bg-gray-300 text-black px-2 py-1 ml-2">
                {cart.length}
              </span>
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              className="navLinks"
              activeClassName="active"
              exact
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
