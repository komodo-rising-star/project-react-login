import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
// import Login from "./components/Login";
// import Registration from "./components/Registration";
import NavAfterLog from "./components/NavAfterLog";
// import BannerAfterLog from "./components/BannerAfterLog"
import Banner from "./components/Banner"
=======
>>>>>>> 4c2109d37a0f5c5fe79a17a7642f7e551b3e323b

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Registration from "./components/Registration";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import AfterLog from "./components/BannerAfterLog";

function App() {
  return (
<<<<<<< HEAD
    <div>
      {/* <Login /> */}
      <NavAfterLog/>
      <Banner/>
      {/* <BannerAfterLog/> */}
    </div>
=======
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
>>>>>>> 4c2109d37a0f5c5fe79a17a7642f7e551b3e323b
  );
}

export default App;
