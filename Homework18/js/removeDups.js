//       Remove Duplicates from an Array

// Create a function that takes an array of items, removes all duplicate items and returns a
// new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
  let resultArr = [];
  let index = 0;
  while (index < arr.length) {
    if (!resultArr.includes(arr[index])) {
      resultArr.push(arr[index]);
      index++;
    } else {
      index++;
      continue;
    }
  }
  return resultArr;
}

//        TESTS

let testOne = ["A", "B", "A", "C", "B"];
let testTwo = ["The", "big", "cat"];
let testThree = ["John", "Taylor", "John"];
let testFour = [1, 0, 1, 0];

console.log(removeDups(testOne)); //  OUTPUT:     [ "A", "B", "C" ]
console.log(removeDups(testTwo)); //  OUTPUT:     ["The", "big", "cat"]
console.log(removeDups(testThree)); //  OUTPUT:     ["John", "Taylor"]
console.log(removeDups(testFour)); //  OUTPUT:      [1, 0]
