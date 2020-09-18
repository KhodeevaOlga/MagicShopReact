import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {Home, Login, Registration, LampPage, Admin} from '../pages';
import {Cart} from '../pages/Cart';


export default function RouterComponents() {
  return (
    <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            component={Login}
          />
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route
            path="/register"
            component={Registration}
            />
          <Route
            path="/Cart"
            component={Cart}
          />
          <Route
            path="/products/:id"
            component={LampPage}
          />
          <Route
            path="/admin"
            component={Admin}
          />

        </Switch>
    </BrowserRouter>
  );
}