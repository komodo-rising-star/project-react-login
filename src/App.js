import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
// import Registration from "./components/Registration";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/home">
          <Banner />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
