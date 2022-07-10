
// SOLUTION USING NEW DATE
function numLeapYears (str) {
    let count = 0
    let dates = str.split("-")
    for (let i = +dates[0]; i <= +dates[1]; i++) {
        if(new Date(i, 1, 29).getMonth() === 1) {
            count++;
        }
    }
    return count;
}


// //  CHECKS IF THE YEAR IS A LEAP YEAR
// function isLeapYear(year) {
//     year = Number(year);
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
//     ? true
//     : false;
// }

// //  ITERATES THROUGH INTERVAL OF YEARS AND COUNTS HOW MANY 
// //  LEAP YEARS THERE IS IN THE INTERVAL
// function numLeapYears(str) {
//   let years = str.split("-");
//   let count = 0;
//   let lastYear = years[years.length - 1];
//   let firstYear = years[0];

//   for (let i = firstYear; i <= lastYear; ++i) {
//     if (isLeapYear(i) === true) {
//       ++count;
//     } 
//   }
//   return count;
// }

console.log(numLeapYears("1600-2000"))

console.log(numLeapYears("1980-1984"));
console.log(numLeapYears("2000-2020"));
console.log(numLeapYears("1600-2000"));
