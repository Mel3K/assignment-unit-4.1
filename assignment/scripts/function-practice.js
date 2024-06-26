console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
let myName = "Mel";
console.log(myName);

function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('test -should say "Hello, Mel!', helloName(myName));
 let yourName = "Johnny";

console.log('test should say "Hello, Johnny!', helloName(yourName));





// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log('in addNumbers', addNumbers);
addNumbers(2,4);


// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne,numTwo, numThree) {
  return numOne * numTwo * numThree
}
multiplyThree(1,2,3);
console.log('multiplybyThree function', multiplyThree(2,2,2));
console.log('in multiplyByThree', multiplyThree(5,1,5));





// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
else {return false;}
}
 
  console.log('in isPositive ', isPositive(-4));
  console.log('in isPositive', isPositive(2));



// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let myArray = ["goat", "chicken", "cow", "sheep"];
console.log(myArray);

function getLast(array) {
  let numberRemoved = array.pop();
  return numberRemoved;
  
}
console.log('in getLast function', getLast(myArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let myNewArray = [1,2,3,4,5,6,7]
console.log(myNewArray);
function find(value, array){
 for (let item of array) {
  if (value === item) {
 return true;
  }
 }
  return false
 }

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
