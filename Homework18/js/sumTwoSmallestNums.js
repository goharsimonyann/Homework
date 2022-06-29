//      Return the Sum of the Two Smallest Numbers

// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

//  INCLUDES POSITIVE NUMBERS => WRONG OUTPUT

function sumTwoSmallestNums(arr) {
  let sum = 0;
  arr.sort((a, b) => a - b);
  sum = arr[0] + arr[1];
  return sum;
}

//  TESTS

let testOne = [19, 5, 42, 2, 77];
let testTwo = [10, 343445353, 3453445, 3453545353453];
let testThree = [2, 9, 6, -1];
let testFour = [879, 953, 694, -847, 342, 221, -91, -723, 791, -587];
let testFive = [3683, 2902, 3951, -475, 1617, -2385];

console.log(sumTwoSmallestNums(testOne));
console.log(sumTwoSmallestNums(testTwo));
console.log(sumTwoSmallestNums(testThree));
console.log(sumTwoSmallestNums(testFour));
console.log(sumTwoSmallestNums(testFive));
