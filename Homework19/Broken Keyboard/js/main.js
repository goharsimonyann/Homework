// //      ## **Broken Keyboard.**

// // Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). 

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

// console.log(brokenKeyboard("happy birthday", "hawwy birthday"));
// console.log(brokenKeyboard("starry night", "starrq light"));
// console.log(brokenKeyboard("beethoven", "affthoif5"));
