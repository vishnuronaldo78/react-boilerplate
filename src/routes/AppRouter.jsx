import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="**" component={NotFound} />
        </Switch>
      </Router>
  );
}
export default AppRouter;
