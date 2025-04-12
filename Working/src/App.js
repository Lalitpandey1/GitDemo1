import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Specific from "./components/Specific";
import NewBook from "./components/NewBook";

import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new">NewBook</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewBook />} />
        <Route path="/:var1" element={<Specific />} />
      </Routes>
    </Router>
  );
}

export default App;
