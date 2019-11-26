import React from "react";
import "./App.css";

import Login from "./components/Login";
import Registration from "./components/Registration";

// import Login from "./components/Login";
// import NavBar from "./components/NavBar";

// import NavAfterLog from "./components/NavAfterLog";
// import Banner from "./components/Banner";
function App() {
  return (
    <div>
      <Login />
      <hr />
      <Registration />{" "}
    </div>
  );
}

export default App;
