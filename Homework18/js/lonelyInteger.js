//      Lonely Integer

// You are given an array of integers having both **negative and positive** values, 
// except for one integer which can be negative or positive. Create a function to find out that integer.

function lonelyInteger(arr){
    let index = 0;
    while(index<arr.length){
      if(!arr.includes(-arr[index])){
        return arr[index];
      } else{
        index++;
        continue;
      }
    }
   }

   //       TESTS
   
   let testOne = [1, -1, 2, -2, 3];
   let testTwo = [-3, 1, 2, 3, -1, -4, -2];
   let testThree = [-9, -105, -9, -9, -9, -9, 105];
   
   console.log(lonelyInteger(testOne));
   console.log(lonelyInteger(testTwo));
   console.log(lonelyInteger(testThree));