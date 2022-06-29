    //  How Much is True?

    //  Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
  let index = 0,
    count = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    while (index < arr.length) {
      if (Boolean(arr[index]) === false) {
        index++;
        continue;
      } else {
        index++;
        count++;
      }
    }
    return count;
  }
}

    //  TESTS

let testOne = [true, false, false, true, false];
let testTwo = [false, false, false, false];
let testThree = [];
let testFour = [true, 1, undefined, 5, null, "hi"];

console.log(`There are ${countTrue(testOne)} true values`);     //  OUTPUT: 2
console.log(`There are ${countTrue(testTwo)} true values`);     //  OUTPUT: 0
console.log(`There are ${countTrue(testThree)} true values`);   //  OUTPUT: 0
console.log(`There are ${countTrue(testFour)} true values`);    //  OUTPUT: 4
