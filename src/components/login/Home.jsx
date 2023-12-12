import React from "react";
import Login from "./Login";

function Home() {
  var isLoggedIn = true;
  return (
    <div className="container">{isLoggedIn ? <h1> Hello </h1> : <Login />}</div>
  );
}

export default Home;
