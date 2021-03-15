import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import ProjectsPage from "./components/ProjectsPage";
import WGInfo from "./components/WGProject/WGInfo";
import CDInfo from "./components/CDProject/CDInfo";
import ParticleContainer from "./components/ParticleContainer";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/projects/wg">
            <WGInfo />
          </Route>
          <Route exact path="/projects/cd">
            <CDInfo />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
