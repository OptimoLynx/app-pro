import React, { useState } from "react";

function Login() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  //const [headingText, setHeading] = useState("");
  function handleChange(event) {
    const { name, value } = event.target;
    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  /*    Ternary Operator 
    CONDITION ? DO IF TRUE : DO IF FALSE
    isSnowing === true ? wearWinterJacket() : wearSweatShirt()
                        OR
    isSnowing ? wearWinterJacket() : wearSweatShirt()
*/

  return (
    <>
      <div className="container">
        <form>
          <input
            onChange={handleChange}
            type="text"
            placeholder="firstname"
            value={fullName.fName}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="lastname"
            value={fullName.lName}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
