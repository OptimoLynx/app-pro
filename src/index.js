import React from 'react';
import ReactDOM from 'react-dom';

const nam = "JD";
const num = 7;

const fName = "Amy";
const lName = "Flor";

ReactDOM.render(
  <div>
    <h1>My Favorite Food</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>

    <h2>Hi {nam}!</h2>
    <p>Your lucky number is {num}</p>
    <p>Your unlucky number is {num + 4}</p>

    <h2>Hello {fName} {lName}!</h2>
    <h3>Hello {`${nam} ${lName}`}!</h3>
  </div>, document.getElementById("root"));
