import React, { useState } from "react";

function Login() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    //Spread Syntax/Operator
    setContact((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    setContact(setContact);

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
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="fName"
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          type="text"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email"
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
