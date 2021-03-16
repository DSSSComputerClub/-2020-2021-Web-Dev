import React from "react";
import { Router, Route, Switch } from "react-router-dom"; // Importing router objects
import history from "./history"; // Importing history

// Importing Views
import HomeApp from "../views/home";
import ResumeApp from "../views/resume";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/resume" exact component={ResumeApp} />
        <Route path="/" component={HomeApp} />
      </Switch>
    </Router>
  );
}

export default App;
