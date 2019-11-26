import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Registration from "./components/Registration";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import AfterLog from "./components/BannerAfterLog";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route exact path="/home">
          <Banner />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Registration/>
        </Route>

        <PrivateRoute path="/profile">
          <AfterLog />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
