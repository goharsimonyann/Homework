//  GOT ENOUGH MONEY?
// Create a function that returns any of the items you can afford in
// the `store` with the money you have in your `wallet`. Sort the list in alphabetical order.

function itemsPurchased(obj, price) {

  price = Number(price.slice(1));
  let affordableItems = Object.keys(obj).filter((elem) => {
    let values = obj[elem].slice(1);
    if (values <= price) {
      return elem;
    }
  });

  return affordableItems.length != 0 ? affordableItems.sort() : "Nothing";
}

const items = { Water: "$1",  Bread: "$3",  TV: "$1,000",  Fertilizer: "$20",};
const items2 = { Apple: "$4",  Honey: "$3",  Fan: "$14",  Bananas: "$4",  Pan: "$100",  Spoon: "$2",};
const testThree = {  Phone: "$999",  Speakers: "$300",  Laptop: "$5,000",  PC: "$1200",};

console.log(itemsPurchased(items2, "$100"));
console.log(itemsPurchased(items, "$300"));
console.log(itemsPurchased(testThree, "$1"));

//  ANOTHER SOLUTION 

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

