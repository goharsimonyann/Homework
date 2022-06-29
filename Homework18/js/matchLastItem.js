//   Match the Last Item

// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

function matchLastItem(arr) {
  let lastItem = arr.splice(-1, 1);         //  cuts the last item
  let firstItem = arr.join("");             //  joins the first part of the array
  lastItem = String(lastItem);              //converts to string s.t. can compare
  if (firstItem === lastItem) {
    return true;
  } else {
    return false;
  }
}

//TESTS

let testOne = ["rsq", "6hi", "g", "rsq6hig"];
let testTwo = [1, 1, 1, "11"];
let testThree = [8, "thunder", true, "8thundertrue"];

console.log(`The last item matches the first part : ${matchLastItem(testOne)}`);        //  OUTPUT: TRUE
console.log(`The last item matches the first part : ${matchLastItem(testTwo)}`);        //  OUTPUT: FALSE
console.log(`The last item matches the first part : ${matchLastItem(testThree)}`);      //  OUTPUT: TRUE


//      ALSO ANOTHER SOLUTION USING POP INSTEAD OF SPLICE

// function matchLastItem(arr){
//     let lastItem = arr[arr.length - 1];
//     let concatArr = arr.pop();
//     concatArr = arr.join('');
//     lastItem = String(lastItem);
//     if(concatArr === lastItem){
//       return true;
//     } else{
//       return false;
//     }
//   }