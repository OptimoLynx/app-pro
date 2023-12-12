const pi = 3.145962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

let num1 = "";
let num2 = "";

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

export default pi;
export { doublePi, triplePi, add, multiply, subtract, divide };
