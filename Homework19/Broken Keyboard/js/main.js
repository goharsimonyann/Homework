//      ## **Broken Keyboard.**

// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s).

function brokenKeyboard(str1, str2) {
  let brokenKeys = [];
 for(let i =0;i<str1.length;i++){
   if(str1[i] === str2[i]){
     continue;
   } else{
     brokenKeys.push(str1[i]);
   }
 }
 
 let foundBrokenKeys = brokenKeys.filter((elem, index) => {
    return brokenKeys.indexOf(elem) === index;
  });
  
  console.log(foundBrokenKeys);
}

brokenKeyboard("happy birthday", "hawwy birthday");
brokenKeyboard("starry night", "starrq light");
brokenKeyboard("beethoven", "affthoif5");

//  ANOTHER SOLUTION USING WHILE 

// function brokenKeyboard(str1, str2) {
//   let i = 0;
//   let arr = [];
//   while (i < str1.length) {
//     if (str1[i] === str2[i]) {
//       ++i;
//       continue;
//     } else {
//       arr.push(str1[i]);
//       ++i;
//     }
//   }
//   arr = arr.filter((c, index) => {
//     return arr.indexOf(c) === index;
//   });
//   return arr;
// }