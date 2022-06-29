//   Clone an Array

//  The Code tab has a code which attempts to add a clone of an array to itself. 
//  There is no error message, but the results are not as expected. Can you fix the code?

 function clone(arr){
    let cloneArr = [];
    cloneArr= [...arr, arr];
    return cloneArr;
  }

  //   TESTS
 
  let testOne = [1, 1];
  let testTwo = [1, 2, 3];
  let testThree = ["x", "y"];
  let testFour = ["x", "y", "z", 1];
  
  console.log(clone(testOne));      //  OUTPUT: [ 1, 1, [ 1, 1 ] ]
  console.log(clone(testTwo));      //  OUTPUT: [ 1, 2, 3, [ 1, 2, 3 ] ]
  console.log(clone(testThree));    //  OUTPUT: [ 'x', 'y', [ 'x', 'y' ] ]
  console.log(clone(testFour));     //  OUTPUT: [ 'x', 'y', 'z', 1, [ 'x', 'y', 'z', 1 ] ]