// PIZZA POINTS

function pizzaPoints(customer, order, price) {
  let freePizza = Object.keys(customer).reduce((item1, item2) => {
    let customerOne = customersObj[item1].filter((elem) => elem >= price);
    let customerTwo = customersObj[item2].filter((elem) => elem >= price);

    if (customerOne.length >= order && customerTwo.length >= order) {
      return item1 + " " + item2;
    } else if (customerOne.length >= order) {
      return item1;
    } else if (customerTwo.length >= order) {
      return item2;
    } else {
      return "[]";
    }
  });

  return freePizza;
}

let customersObj = {
  Batman: [22, 30, 11, 17, 15, 52, 27, 12],
  "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
};

function foo(obj, order, price) {
  return Object.keys(obj).filter(
    (i) => obj[i].filter((cost) => cost >= price).length > order
  );
}

console.log(foo(customersObj, 5, 20));
// function pizzaPoints(obj, order, price) {
//   let freePizza = Object.entries(obj).map((item) => {
//     let filteredOrder = obj[item].filter((elem) => elem >= price);
//     for (let i = 0; i < filteredOrder.length; i++) {
//       if (filteredOrder[i].length >= order) {
//         return item;
//       }
//     }
//   });
//   return freePizza;
// }

// console.log(pizzaPoints(customersObj, 5, 20));

// // let customersObj = {
// //   "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
// //   "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
// // };

// console.log(pizzaPoints(customersObj, 5, 20));
// console.log(pizzaPoints(customersObj, 3, 10));
// console.log(pizzaPoints(customersObj, 5, 100));
