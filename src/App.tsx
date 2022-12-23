import { Home } from "./screens/Home";
import { Login } from "./screens/Login/Login";
// import { BrowserRouter as Router } from "react-router-dom";
import "./style/reset.css";
import "./style/index.css";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const headleOpen = () => setIsAuthenticated(true);

  return (
    // <Router></Router>
    <div className="wrapper">
      {isAuthenticated ? <Home /> : <Login onLogin={headleOpen} />}
    </div>
  );
}

export default App;
