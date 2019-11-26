import React from "react";
import "./App.css";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <div>
      <ul>
        <li>HOME</li>
        <li>LOGIN</li>
        <li>REGISTRATION</li>
      </ul>

      <hr />

      <Login />

      <hr />

      <Registration />
    </div>
  );
}

export default App;
