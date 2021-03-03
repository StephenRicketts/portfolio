import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Container from "./components/Container";
import Greeting from "./components/Greeting";
import ProjectsPage from "./components/ProjectsPage";

const App = () => {
  return (
    <Container>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Greeting />
          </Route>

          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
