    //  Find the Second Largest Number

    //  Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
  let result = 0;
  arr.sort(function descendingArr(a, b) {
    return b - a;
  });
  result = arr[1];
  return result;
}

    //  TESTS

let testOne = [10, 40, 30, 20, 50];
let testTwo = [25, 143, 89, 13, 105];
let testThree = [54, 23, 11, 17, 10];
let testFour = [54, 1458, 11, 117, 10];

console.log(`The second largest number is ${secondLargest(testOne)}`);      //  OUTPUT: 40
console.log(`The second largest number is ${secondLargest(testTwo)}`);      //  OUTPUT: 105  
console.log(`The second largest number is ${secondLargest(testThree)}`);    //  OUTPUT: 23
console.log(`The second largest number is ${secondLargest(testFour)}`);     //  OUTPUT: 117
