import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;
  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "gold";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <>
      <h1 className="heading" style={customStyle}>
        {" "}
        {greeting}
      </h1>
      <h1>My Favorite Food</h1>
      <ul>
        <li>Bacon</li>
        <li>Hotpot</li>
        <li>Noodles</li>
      </ul>
    </>
  );
}

export default Heading;
