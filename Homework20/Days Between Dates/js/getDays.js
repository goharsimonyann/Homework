//  How Many Days Between Two Dates

//  Create a function that takes two dates and returns the number of days between
//  the first and second date.
function getDays(dayOne, dayTwo) {
  //  CONVERTS TWO DATES TO UNIX TIME
  let argOne = dayOne.getTime();
  let argTwo = dayTwo.getTime();
  //  COUNTS THE DIFFERENCE THEN CONVERTS TO DAYS
  let daysBetween = (argTwo - argOne) / (1000 * 60 * 60 * 24);
  return `There is ${daysBetween} days between given dates`;
}

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
console.log(getDays(new Date("December 29, 2018"), new Date("January 1, 2019")));
console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")));
