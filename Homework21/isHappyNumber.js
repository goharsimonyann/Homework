/*

A happy number is a number which yields a `1` by repeatedly summing up the 
square of its digits. If such a process results in an endless cycle of numbers 
containing `4`, the number is said to be an unhappy number.

Create a function that accepts a number and determines whether the number is a 
happy number or not. Return `true` if so, `false` otherwise.

*/

function isHappy(num) {
  let sum = 0;

  while (num) {
    sum += Math.pow(num % 10, 2);
    num = Math.floor(num / 10);
  }

  return sum === 1 ? true : sum > 1 && sum <= 4 ? false : isHappy(sum);
}

console.log(isHappy(139)); //true
console.log(isHappy(19)); //true
console.log(isHappy(12)); //false
console.log(isHappy(67)); //false
console.log(isHappy(1)); //true
