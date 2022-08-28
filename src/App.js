import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
