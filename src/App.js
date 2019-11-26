import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
<<<<<<< HEAD
import Registration from "./components/Registration";
=======
<<<<<<< HEAD
import Register from "./components/Registration"

function App() {
  return (
    <div>
      <Register/>
      <Login />
    </div>
=======
// import Registration from "./components/Registration";
>>>>>>> 6c66ad708ee6807ef766f06e61bad8a1f22afcd2
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
          <Registration />
        </Route>

        <PrivateRoute path="/profile">
          <AfterLog />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
>>>>>>> 5b9750f959ff14b7ca3caed7c1cb24a6d7455a1e
  );
}

export default App;
