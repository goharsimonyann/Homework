// Day Number of Year

// Each year has 365 or 366 days. Given a string `date`
//  representing a Gregorian calendar date formatted as `month/day/year`
// , return the *day-number*
//  of the year.

function dayOfYear(date) {
  //  GETS THE DATE
  const CURRENT_DATE = new Date(date);
  //  GETS JAN 01 FOR GIVEN YEAR
  const FIRST_DAY = new Date(CURRENT_DATE.getFullYear(), 0, 1); 
  // GETS THE DIFFERENCE BETWEEN 2 DATES AND ADDS 1 CAUSE IT DOESNT COUNT THE LAST DATE 
  // THEN CONVERTS UNIX TIME TO NORMAL 
  return `The day number of ${date} is ${Math.ceil(((CURRENT_DATE.getTime() - FIRST_DAY.getTime()) + 1) / (1000 * 3600 * 24))}`;
}

console.log(dayOfYear("12/13/2020"));
console.log(dayOfYear("12/17/2020"));
console.log(dayOfYear("11/16/2020"));
console.log(dayOfYear("1/9/2019"));
console.log(dayOfYear("3/1/2004"));
console.log(dayOfYear("12/31/2000"));




