// // Google is launching a network of autonomous pizza delivery drones and wants you to 
// // create a flexible rewards system (Pizza Points™) that can be tweaked in the future. 
// // The rules are simple: if a customer has made at least *N* orders of at least *Y* price, 
// // they get a FREE pizza!

// // Create a function that takes an object of customers, a minimum number of orders and a 
// // minimum order price. Return an array of customers that are eligible for a free pizza.

// function pizzaPoints(obj, order, price){  //obj order = 5  price = 20
//     let entries = Object.entries(obj);
//     console.log(entries);
//     let i = 0;
//     let priceArr = [];
//     while(i< entries.length){
//       priceArr.push(entries[i][1].filter(elem => elem >= price));
//       ++i;
//     }
//     // CONSOLENERE CHI ANUM
    
//     while(i<priceArr.length){
//       if(priceArr[i].lenght >= order) {
//         console.log("success");
//       } else {
//         console.log("fail");
//       }
//     }
//     console.log(priceArr);
//   }
  
//   let customersObj = {
//       "Batman": [22, 30, 11, 52, 27, 12],
//       "Spider-Man": [5, 17, 3, 33, 40, 25]
//   }
  
//   pizzaPoints(customersObj, 5, 20);

