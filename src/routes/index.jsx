import React from "react";
import { Switch, Route } from "react-router";

import Home from "../pages/Home";
import Main from "../pages/Main";
import Register from "../pages/Register";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register/">
          <Register />
        </Route>
        <Route exact path="/main/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
