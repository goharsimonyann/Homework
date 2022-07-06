//      Return the Most Expensive Piece of Jewellery.

// Create a function that gets the name of the piece of jewelry with the highest price and
// returns "The most expensive one is the {name of jewelry piece}"

// function mostExpensive(obj) {
//   let expensive = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
//   return `The most expensive one is the ${expensive}`;
// }

// const testOne = {
//   "Diamond Earrings": 980,
//   "Gold Watch": 250,
//   "Pearl Necklace": 4650,
// };
// const testTwo = {
//   "Silver Bracelet": 280,
//   "Gemstone Earrings": 180,
//   "Diamond Ring": 3500,
// };

// console.log(mostExpensive(testOne));
// console.log(mostExpensive(testTwo));

debugger;
function mostExpensive(obj) {
  let expensive = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  return `The most expensive one is the ${expensive}`;
}

const testOne = {
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650,
};
const testTwo = {
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500,
};

console.log(mostExpensive(testOne));
console.log(mostExpensive(testTwo));

// LONG SOLUTION

// function mostExpensive(obj) {
//   let objEntries = Object.entries(obj);
//   let objValues = Object.values(obj);
//   let sortedValues = objValues.sort((a, b) => b - a);

//   let maxPrice = sortedValues[0];
//   let i = 0;
//   while (i < objEntries.length) {
//     if (objEntries[i][1] === maxPrice) {
//       console.log(`The most expensive one is the ${objEntries[i][0]}`);
//     }
//     ++i;
//   }
// }
