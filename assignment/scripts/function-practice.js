console.log('***** Function Practice *****')

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
function helloName( name ) {
  let myName = name; // set variable myName = to argument
  return myName; // returns name that was passed as argument
} // end helloName function
// Remember to call the function to test
console.log('Hello there, ', helloName('David'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let total = firstNumber + secondNumber; // add arguments
  return total; // return firstNumber + secondNumber;
} // end addNumbers function

console.log('The total of the two numbers is: ', addNumbers(6, 4)); // console log to test function

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  let sum = (num1 * num2 * num3); // multiply the 3 arguments
  return sum; // return the product of the 3 numbers
} // end multiplyThree function

console.log('The total after multiplying 2*3*5 is: ', multiplyThree(2, 3, 5)); // log to test proper function

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
} // end isPositive function

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) ); // logs for proof of functionality
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let testArray = ['David', 'Austin', 'Heinrich', 'Wanda']; // test array
let empArray = []; // test empty array
function getLast( array ) {
  let arr = array; // create variable for argument
  return arr[arr.length - 1]; // return the item at the index of array length minus 1
} // end getLast function

console.log('The last item in a hard coded array is ', getLast([3,4,5])); // console logs to show
console.log('The last item when array is empty: ', getLast([])); // this works
console.log(`The last item when an array is empty from array by name is ${getLast(empArray)}`);
console.log(`The last item in the array from an array by name is ${getLast(testArray)}`);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let arr7 = [2, 3, 4, 5, 6, 7]; // test array
let arrString = ['Red', 'Green', 'Orange', 'Purple']; // test array with strings
function find( value, array ){
  let target = value; // create variable for first argument
  let arr = array; // create variable for second argument
  for (let item of arr) { // loop to check the item in arr
    if (item === target) { // if to check if equal to first argument
      return true;
    }
  }
  return false;
} // end find function

console.log(`We are looking for the number 75, is it here? ${find(75, [32, 57, 63, 75])}`);
console.log('We are looking for the number 6, is it here?', find(6, arr7)); // console logs to show
console.log('We are looking for the number 8, is it here?', find(8, arr7)); // functioning function
console.log('We are looking for Orange, is it here?', find('Orange', arrString));
console.log('We are looking for Blue, is it here?', find('Blue', arrString));
console.log('We are looking for Black, is it here?', find('Black', ['Yellow', 'Pink', 'Brown', 'Blue']));





// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let target = letter; // assign first argument as variable
  let givenString = string; // assign second argument as variable
  if ( givenString.substring(0, 1) === target ) {
    return true; // return true if first letter of string is the same as given letter
  } else {
    return false;
  } // end if/else
} // end isFirstLetter function

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') ); // console logs to show
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') ); // function works

// 9. Function to return the sum of all numbers in an array
let arrSum = [5, 10, 20, 30]; // array of test numbers
function sumAll(array) {
  let sum = 0; // variable for total, starting at 0
  let arr = array; // assigning argument array to array in the function
  // TODO: loop to add items
  for (let num of arr) { // for of loop total numbers
    sum += num; // adding the numbers from array to the total
  }
  return sum; // return total number in the array
} // end sumAll function

console.log(`The total of the array is: ${sumAll(arrSum)}`); // console logs to show the function
console.log('The total of 3 + 4 + 5 + 6 is ', sumAll([3, 4, 5, 6])); // functions

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let posArray = [ -3, 0, 2, 5, 10 ]; // test array
let noPos = [ -10, -7, -4, -2, 0 ]; // no positives test array
let emptyArr = []; // empty test array

function posCheck ( array ) {
  let arr = array; // creating variable for first argument
  let allPos = []; // create empty array for positive numbers
  for ( let num of arr ){ // loop to check the array given as argument
    if ( num > 0 ) { // if to check if positive
      allPos.push( num ); // add the number to a new array if positive
    } // end if
  } // end for loop
  return allPos; // return new array with only positive numbers
} // end posCheck function

//logs to show the new array with mixed numbers, no positives and one that is empty
console.log(`The new array with only positive numbers from -3, 0, 2, 5, 10 is: ${posCheck( posArray ).join( ', ' )}`);
console.log(`The new array with only positives from -10, -4, 0, 1, 10, 15 is: ${posCheck( [ -10, -4, 0, 1, 10, 15 ] ).join(', ')}`);
console.log('The new array when no positive numbers are passed is: ', posCheck( noPos ));
console.log('The new array when no positive numbers are passed is: ', posCheck( [ -30, -18, -9, -2, 0 ] ));
console.log('The the new array when the passed array is empty is: ', posCheck( emptyArr ));
console.log('The the new array when the passed array is empty is: ', posCheck( [] ));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// TRACK THE ROBOT (PART 2)
// https://edabit.com/challenge/jfpfpH6w42tZeRo2T
// This function is designed to track a robot moving on a grid. You pass as many movement instructions as you want as arguments.
// After each move the robot turns 90 degrees clockwise. Given the movements you are to determine where the robot's final position is.
// Example - pass [20, 30, 10, 40] **Robot always starts at (0, 0) facing North**
// The robot moves 20 steps to the North, turns 90 clockwise @ (0, 20)
// Then the robot is facing east and moves 30 steps, turns 90 clockwise @ (30, 20)
// Then the robot is facing south and moves 10 steps, turns 90 clockwise @ (30,10)
// Finally the robot is facing west and moves 40 steps, turns 90 clockwise @ (-10, 10)
// Final position is (-10, 10)

function trackRobot(...theArgs)  {
  let c = theArgs.length; // count number of args passed
  let args = theArgs; // variable for args
  let xCord = 0; // staring point of x-coordinate
  let yCord = 0; // starting point of y-coordinate
  let north = true; // starting direction of North
  let east = false; // starting direction of East
  let south = false; // starting direction of South
  let west = false; // starting direction of West
  if (c === 0) {
  console.log(`You gave ${c} commands so the robot didn't move!`);
  } else if (c === 1) {
    console.log(`You gave ${c} command and it was ${args} steps.`);
  } else {
    console.log(`You gave ${c} commands and they were ${args.join(' steps, ')} steps.`);
  }
  for (let steps of args) {
    if (north) { // Moving North and/or starting point
      yCord = steps + yCord;
      north = false;
      east = true;
      south = false;
      west = true;
      if (steps < 0) {
        console.log(`The robot traveled South and is at (${xCord}, ${yCord})`);
      } else {
        console.log(`The robot traveled North and is at (${xCord}, ${yCord})`);
      }
    } else if (east) { // Moving East
      xCord = steps + xCord;
      north = false;
      east = false;
      south = true;
      west = false;
      if (steps < 0) {
        console.log(`The robot traveled West and is at (${xCord}, ${yCord})`);
      } else {
        console.log(`The robot traveled East and is at (${xCord}, ${yCord})`);
      }
    } else if (south) { // Moving South
      yCord = yCord - steps;
      north = false;
      east = false;
      south = false;
      west = true;
      if (steps < 0) {
        console.log(`The robot traveled North and is at (${xCord}, ${yCord})`);
      } else {
        console.log(`The robot traveled South and is at (${xCord}, ${yCord})`);
      }
    } else if (west) { // Moving West
      xCord = xCord - steps;
      north = true;
      east = false;
      south = false;
      west = false;
      if (steps < 0) {
        console.log(`The robot traveled East and is at (${xCord}, ${yCord})`);
      } else {
        console.log(`The robot traveled West and is at (${xCord}, ${yCord})`);
      }
    } // end if/else
  } // end for loop
  console.log(`The robot is currently at (${xCord}, ${yCord})`);
} // end trackRobot function

function testRobot() {
  let rbMoves;
  let arrMoves = [];
  let arrNum = [];
  if (document.getElementById('robotData').value.length === 0) { // runs test logs if no user data is input
  trackRobot(20, 30, 10, 40);
  trackRobot();
  trackRobot(-10, 20, 10);
  trackRobot(20, 10, 50, 70, 10, 30, 20);
  } else {
    rbMoves = document.getElementById('robotData').value;
    arrMoves = rbMoves.split(','); // splits string of values seperated by commas into array of values
    arrMoves.forEach(str => { // converts each string in the array to a number and adds them
      arrNum.push(Number(str)); // to a new array
    });
    trackRobot(...arrNum); // run trackRobot function with new array of numbers as individual arguments
  } // end if/else
  document.getElementById('robotData').value = ''; // clear out input box after submitting
} // end testRobot function