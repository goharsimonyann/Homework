// //      C*ns*r*d Str*ngs

// // Someone has attempted to censor my strings by replacing every vowel with a `*`, `l*k* th*s`.
// // Luckily, I've been able to find the vowels that were removed.

// // Given a censored string and a string of the censored vowels, return the original uncensored string.

// function uncensor(str1, str2) {
//   let newStr = "";
//   let count = 0,
//     i = 0;
//   while (i < str1.length) {
//     if (str1[i] === "*") {
//       newStr += str2[count];
//       ++count;
//       ++i;
//     } else {
//       newStr += str1[i];
//       ++i;
//     }
//   }
//   return newStr;
// }

// console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
// console.log(uncensor("abcd", ""));
