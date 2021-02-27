import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import ParticleBackground from "./components/ParticleBackground";
import Greeting from "./components/Greeting";

const container = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

const App = () => {
  return (
    <div className="font-mono" style={container}>
      <ParticleBackground />
      <div style={container}>
        <NavBar />
        <Router>
          <Greeting />
        </Router>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
