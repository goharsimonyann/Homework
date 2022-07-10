function timeToEat(str) {
  let time = str.split(" ");
  let hours = Number(time[0].split(":")[0]);
  let minutes = Number(time[0].split(":")[1]);

  const BREAKFAST = 7;
  const LUNCH = 12;
  const DINNER = 19;

  if (time[1] == "p.m." && hours < 12) {
    hours += 12;
    console.log(hours);
  }

  // //   if()
  else {
    console.log(hours);
  }
}

timeToEat("12:00 a.m.");
