// //     WEEKLY SALARY

// function weeklySalary(hoursArr) {
//   let hoursEntries = Object.entries(hoursArr);
//   let salary = 0;

//   for (let i = 0; i < hoursEntries.length; i++) {
//     salary += dailySalary(hoursEntries[i]);
//   }
//   return salary;
// }

// function dailySalary(workedHoursArr) {
//   //  RATE OF SALARY
//   const OVERTIME_RATE = 15;
//   const STANDART_RATE = 10;

//   // CONVERTING THE ELEMENTS TO NUMBER IN CASE
//   let weekdays = Number(++workedHoursArr[0]);
//   let workedHours = Number(workedHoursArr[1]);

//   let overtimeHours = workedHours - 8;
//   let totalSalary = workedHours * STANDART_RATE;

//   workedHours > 8
//     ? (totalSalary += overtimeHours * (OVERTIME_RATE - STANDART_RATE))
//     : totalSalary;
//   // WHY DIDN"T THIS WORK?? (weekdays == 6 || weekdays == 7) ? (totalSalary * 2) : totalSalary;

//   return weekdays == 6 || weekdays == 7 ? totalSalary * 2 : totalSalary;
// }

// // weeklySalary([10, 10, 10, 0, 8, 0, 0]) ➞ 410
// console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]));
// console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]));
// console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]));
