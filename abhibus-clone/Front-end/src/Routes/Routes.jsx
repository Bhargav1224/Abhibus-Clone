import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Home } from "./Dashboard/Home";
import {Index} from "../Components/BusPage/index"
export function Routes() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bus">
            <Index/>
        </Route>
      </Switch>
    </>
  );
}
