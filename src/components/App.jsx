import React from "react";
import Heading from "./Heading";
import Luck from "./Luck";
import Name from "./Name";
import Math from "./Math";
import BasicMath from "./BasicMath";

function App() {
  return (
    <div className="flex-container">
      <Heading />
      <Math />
      <BasicMath />
      <Luck />
      <Name />
    </div>
  );
}

export default App;
