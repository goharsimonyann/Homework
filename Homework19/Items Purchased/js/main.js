// //  GOT ENOUGH MONEY?
// // Create a function that returns any of the items you can afford in
// // the `store` with the money you have in your `wallet`. Sort the list in alphabetical order.

// function itemsPurchased(objects, wallet) {
//   let entries = Object.entries(objects),
//     vals = Object.values(objects),
//     price = Number(wallet.slice(1));
//   let values = [],
//     canAfford = [];
//   vals.forEach((value) => {
//     value = Number(value.slice(1));
//     values.push(value);
//   });

//   values.filter((item, index) => {
//     if (item <= price) {
//       canAfford.push(String(entries[index][0]));
//     }
//   });
//   let result = canAfford.sort();
//   canAfford.length === 0 ? console.log("Nothing") : console.log(result);
// }

// const testOne = { Water: "$1", Bread: "$3", TV: "$1,000", Fertilizer: "$20" };
// const testTwo = { Apple: "$4", Honey: "$3", Fan: "$14", Bananas: "$4", Pan: "$100", Spoon: "$2",};
// const testThree = { Phone: "$999", Speakers: "$300", Laptop: "$5,000", PC: "$1200",};

// itemsPurchased(testOne, "$300");
// itemsPurchased(testTwo, "$100");
// itemsPurchased(testThree, "$1");
