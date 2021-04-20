import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import WGInfo from "./components/WGProject/WGInfo";
import CDInfo from "./components/CDProject/CDinfo";
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
              <WGInfo />
            </Route>
            <Route exact path="/projects/cd">
              <CDInfo />
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
