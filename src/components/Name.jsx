import React from "react";

function Name() {
  const fName = "Amy";
  const lName = "Flor";

  return (
    <>
      <h2>
        Hello {fName} {lName}!
      </h2>
      <h3>Hello {`${lName}`}!</h3>
    </>
  );
}
export default Name;
