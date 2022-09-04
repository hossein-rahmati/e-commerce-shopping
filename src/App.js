import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import CartProvider from "./providers/CartProvider";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <CartProvider>
        <ToastContainer />
        <Switch>
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={HomePage} />
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
