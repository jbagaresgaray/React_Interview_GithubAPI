import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../pages/Main/Main";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:username" component={Main} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
