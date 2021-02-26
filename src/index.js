import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
