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
  return myName;
}
// Remember to call the function to test
console.log('Hello there, ', helloName('David'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let total = firstNumber + secondNumber; // add arguments
  return total; // return firstNumber + secondNumber;
}

console.log('The total of the two numbers is: ', addNumbers(6, 4)); // console log to test function

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  let sum = (num1 * num2 * num3); // multiply the 3 arguments
  return sum; // return the sum of the 3 numbers
}

console.log('The sum of the three numbers is: ', multiplyThree(2, 3, 5)); // log to test function

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let testArray = ['David', 'Austin', 'Heinrich', 'Wanda'];
let empArray = [];
function getLast( array ) {
  let arr = array;
  return arr[arr.length - 1];
}

console.log('The last item in a hard coded array is ', getLast([3,4,5]));
console.log('The last item when array is empty: ', getLast([]));
console.log(`The last item when an array is empty from array by name is ${getLast(empArray)}`);
console.log(`The last item in the array from an array by name is ${getLast(testArray)}`);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let arr7 = [2, 3, 4, 5, 6, 7];
let arrString = ['Red', 'Green', 'Orange', 'Purple'];
function find( value, array ){
  let arr = array;
  let target = value;
  for (item of arr) {
    if (item === target) {
      return true;
    }
  }
  return false;
}

console.log(`We are looking for the number 75, is it here? ${find(75, [32, 57, 63, 75])}`);
console.log('We are looking for the number 6, is it here?', find(6, arr7));
console.log('We are looking for the number 8, is it here?', find(8, arr7));
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
let arrSum = [ 5, 10, 20, 30 ]; // array of test numbers
function sumAll( array ) {
  let sum = 0; // variable for total, starting at 0
  let arr = array; // assigning argument array to array in the function
  // TODO: loop to add items
  for ( num of arr ) { // for of loop total numbers
    sum += num; // adding the numbers array to the total
  }
  return sum; // return total number in the array
} // end sumAll function

console.log(`The total of the array is: ${sumAll(arrSum)}`); // console logs to show the function
console.log('The total of 3+4+5+6 is ', sumAll([3, 4, 5, 6])); // functions

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
