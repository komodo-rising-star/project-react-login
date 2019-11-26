import React from "react";
import "./App.css";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
import NavAfterLog from "./components/NavAfterLog";
// import BannerAfterLog from "./components/BannerAfterLog"
import Banner from "./components/Banner"

// import Login from "./components/Login";

function App() {
  return (
    <div>
      {/* <Login /> */}
      <NavAfterLog/>
      <Banner/>
      {/* <BannerAfterLog/> */}
    </div>
  );
}

export default App;
