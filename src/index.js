import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import WGinfo from "./components/WGProject/WGInfo";
import CDinfo from "./components/CDProject/CDinfo";
import STinfo from "./components/STProject/STinfo";
import ResumePage from "./components/ResumePage";
import ScrollToTop from "./components/wrappers/ScrollToTop";

const App = () => {
  return (
    <Fragment>
      <Router>
        <ScrollToTop>
          <NavBar />
          <Switch>
            <Route exact path="/portfolio">
              <MainPage />
            </Route>
            <Route exact path="/projects/wg">
              <WGinfo />
            </Route>
            <Route exact path="/projects/cd">
              <CDinfo />
            </Route>
            <Route exact path="/projects/st">
              <STinfo />
            </Route>
            <Route exact path="/resume">
              <ResumePage />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
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
