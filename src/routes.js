import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Home } from "./views/Home";
import { NoMatch } from "./views/NoMatch";
import NavBar from "./components/NavBar/NavBar";
import { LoansList } from "./views/LoansList";

function Routes() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/loans-list" component={LoansList} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default Routes;
