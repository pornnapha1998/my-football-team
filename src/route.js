import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./features/Home/home";

export default class route extends Component {
  render() {
    const pages = [{ path: "/", component: Home }];

    return (
      <BrowserRouter>
        <Switch>
          {pages?.map((page, i) => (
            <Route key={i} exact path={page.path} component={page.component} />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
}
