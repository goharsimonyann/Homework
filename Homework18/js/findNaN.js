//      Find NaN in an Array

// Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. 
// If NaN is not found in the array, then return -1.

function findNaN(arr){
    let index=0;
    while(index<arr.length){
      if(isNaN(arr[index]) === true){
        return index;
      } else{
        index++;
        continue;
      }
    }
    return -1;
  }

//   TESTS

  let testOne = [1, 2, NaN];
  let testTwo = [NaN, 1, 2, 3, 4];
  let testThree = [0, 1, 2, 3, 4];
  let testFour = [1, 1, 1];

  console.log(findNaN(testOne));        //  OUTPUT: 2
  console.log(findNaN(testTwo));        //  OUTPUT: 0
  console.log(findNaN(testThree));      //  OUTPUT: -1
  console.log(findNaN(testFour));       //  OUTPUT: -1


  //   ALSO ANOTHER SOLUTION BUT DOESNT WORK PROPERLY

// function findNaN(arr) {
//   arr.forEach(function (val, i) {
//     if (isNaN(val) === true) {
//       console.log(i);
//     }
//   });
//   return -1;
// }
