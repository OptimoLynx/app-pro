//Ex1! Map -Create a new array by doing something with each item in an array.
//Method 1:
//const numbers = [3, 56, 2, 48, 5];
/* function double(x) {
  return x * 2;
}
const newNumber = numbers.map(double);
console.log(newNumber);  */

//Method 2: push
//const numbers = [3, 56, 2, 48, 5];
/* const newNumbers = [];
function double(x){
  newNumbers.push(x * 2);
}
numbers.forEach(double);
console.log(newNumbers);  */

//Method 3: foreach function
//var numbers = [3, 56, 2, 48, 5];
/* var newNumbers = [];
numbers.forEach(function (x){
  newNumbers.push(x * 2);
});
console.log(newNumbers);  */

//Method 4: Map Function
//const numbers = [3, 56, 2, 48, 5];
/* const newNumbers = numbers.map((x)=>{
  return x * 2;
});
console.log(newNumbers); */

//Ex2! Filter - Create a new array by keeping the items that return true.
// Method 1
/* var numbers = [3, 56, 2, 48, 5];
const newNumbers = numbers.filter(function (num) {
  return num > 10;
});
console.log(newNumbers); */
// console: [56, 48]

//Method 2: foreach function
//var numbers = [3, 56, 2, 48, 5];
/* var newNumbers = [];
const newNumbers = numbers.forEach(function (num){
    if(num < 10){
        newNumbers.push(num);
    }
});
console.log(newNumbers);  */
// console: [3, 2, 5]

//Ex3! Reduce - Accumulate a value by doing something to each item in an array.
// Method 1: foreach
/* var numbers = [3, 56, 2, 48, 5];
var newNumber = 0;
numbers.forEach(function (currentNumber) {
  newNumber += currentNumber
});
console.log(newNumber); */
// console: [114]

// Method 2: Reduce
/* var numbers = [3, 56, 2, 48, 5];
var newNumber = numbers.reduce(function (accumulator, currentNumber) {
    console.log("accumulator = " + accumulator);
    console.log("currentNumber = " + currentNumber);
    return accumulator + currentNumber;
});
console.log(newNumber); */
// console: [114]

//Ex4! Find - find the first item that matches from an array.
// Method 1: find method will stop when the first number/item found
/* var numbers = [3, 56, 2, 48, 5];
const newNumber = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumber); */
// console: [56]

//Ex5! FindIndex - find the index of the first item that matches.
// Method 1: findIndex method will stop when the first item found
/* var numbers = [3, 56, 2, 48, 5];
const newNumber = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNumber); */
// console: [56]
