import React from "react";

function Luck() {
  const nam = "JD";
  const num = 7;

  return (
    <>
      <h2>Hi {nam}!</h2>
      <p>Your lucky number is {num}</p>
      <p>Your unlucky number is {num + 4}</p>
    </>
  );
}

export default Luck;
