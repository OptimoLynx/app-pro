import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);

    /*       const { name, value } = event.target;
      setFullName((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      }); */
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }

  /*    Ternary Operator 
    CONDITION ? DO IF TRUE : DO IF FALSE
    isSnowing === true ? wearWinterJacket() : wearSweatShirt()
                        OR
    isSnowing ? wearWinterJacket() : wearSweatShirt()
*/

  return (
    <div className="container">
      <h1> Hello {headingText} </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
