import React from "react";
import { ROUTES } from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainPage = () => {
  return (
    <Router>
      <Switch>
        {ROUTES.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default MainPage;
