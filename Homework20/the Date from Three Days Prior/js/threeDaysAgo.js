// Return the Date from Three Days Prior

// Given a `Date()` object, return the date from three days prior as a string:
// `"2016-01-19"`.

function threeDaysAgo(date) {
  //    THREE DAYS IN MILLISECONDS
  const THREE_DAYS = 259200000;
  //    CONVERTS CURRENT DATE TO MILLISECONDS
  const CURRENT_DATE = date.getTime();
  //    COUNTS THE DATE THREE DAYS PRIOR IN MILLISECONDS
  const threeDaysBefore = CURRENT_DATE - THREE_DAYS;
  //    CONVERTS THE DATE IN MILLISECONDS TO REGULAR DATE
  const FINAL_DATE = new Date(threeDaysBefore);
  const MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  //    CUTTING EACH PART WE NEED TO OUTPUT
  return `Three days ago was ${
    FINAL_DATE.getFullYear() +
    "-" +
    MONTHS[FINAL_DATE.getMonth()] +
    "-" +
    FINAL_DATE.getDate()
  }`;
}

console.log(threeDaysAgo(new Date(2018, 0, 1)));
console.log(threeDaysAgo(new Date(2015, 5, 17)));
console.log(threeDaysAgo(new Date(1965, 3, 15)));
