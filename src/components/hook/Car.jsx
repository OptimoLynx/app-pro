import React from "react";
import cars from "../../practice";

console.log(cars);

function Car() {
  //Destructure practice.js
  const [honda, tesla] = cars;
  const {
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;
  const {
    coloursByPopularity: [hondaColoursByPopularity],
  } = honda;
  const {
    coloursByPopularity: [teslaColoursByPopularity],
  } = tesla;

  return (
    <div className="container">
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaColoursByPopularity}</td>
          <td>{teslaTopSpeed}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaColoursByPopularity}</td>
          <td>{hondaTopSpeed}</td>
        </tr>
      </table>
    </div>
  );
}

export default Car;
