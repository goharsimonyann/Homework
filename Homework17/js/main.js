/////////////     SPECIAL ARRAY PROBLEM   /////////////////

const testOne = [2, 7, 4, 9, 6, 1, 6, 3]; //true
const testTwo = [2, 7, 9, 2, 6, 1, 6, 3]; //false
const testThree = [2, 7, 9, 1, 6, 1, 6, 3]; //false
const testFour = [2, 3, 2, 3]; //true

function isSpecial(arr = []) {
  let index = 0;
  while (index < arr.length) {
    if (index % 2 === 0 && arr[index] % 2 === 0) {
      index++;
      continue;
    }
    if (index % 2 !== 0 && arr[index] % 2 !== 0) {
      index++;
      continue;
    } else {
      return false;
    }
  }
  return true;
}

//    TESTS:

console.log("Array is special: " + isSpecial(testOne)); // output:  TRUE
console.log("Array is special: " + isSpecial(testTwo)); // output:  FALSE
console.log("Array is special: " + isSpecial(testThree)); // output:  FALSE
console.log("Array is special: " + isSpecial(testFour)); // output:  TRUE
console.log("\n");

/////////////    ALL TRUTHY VALUE PROBLEM   /////////////////

let arrayOne = [true, true, true]; //true
let arrayTwo = [true, false, true]; //false
let arrayThree = ["", NaN, undefined]; //false
let arrayFour = [5, 4, 3, 2]; //true
let arrayFive = [5, true, "hello", 0]; //false

function allTruthy(arr = []) {
  let index = 0;
  while (index < arr.length) {
    if (Boolean(arr[index]) === false) {
      return false;
    } else {
      index++;
      continue;
    }
  }
  return true;
}

//    TESTS:

console.log("The statement is " + allTruthy(arrayOne)); //  output: TRUE
console.log("The statement is " + allTruthy(arrayTwo)); //  output: FALSE
console.log("The statement is " + allTruthy(arrayThree)); //  output: FALSE
console.log("The statement is " + allTruthy(arrayFour)); //  output: TRUE
console.log("The statement is " + allTruthy(arrayFive));
0; //  output: FALSE
console.log("\n");

/////////////    Mean of All Digits   /////////////////

function mean(number) {
  let sumDigits = 0;
  let result = 0;
  let numDigits = 0;
  let forOutput = number;
  while (+number != 0) {
    number = Number(number);
    sumDigits += number % 10;
    number = number / 10;
    number = Math.trunc(number);
    numDigits++;
  }
  result = sumDigits / numDigits;
  console.log(`The mean of ${forOutput} is ${result}`);
}

//    TESTS:

mean(42); // output : 3
mean(12345); // output : 3
mean(666); // output : 6
mean(1456); // output : 4
