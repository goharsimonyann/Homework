//  Jake's Meal Time

// Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m.
//  and dinner at 7:00 p.m. in the evening.

// Create a function that takes in the current time as a string and determines the duration
// of time before Jake's next meal. Represent this as an array with the first and second elements representing hours and
// minutes, respectively.

function hoursToMinutes(hour, min) {
  return hour * 60 + min;
}

function timeToEat(str) {
  let time = str.split(" ");
  let hours = Number(time[0].split(":")[0]);
  let minutes = Number(time[0].split(":")[1]);
  //  7h  = 420 min, 12h = 720 min, 19h = 1140 min
  const EATING_BREAK = [420, 720, 1140];

  if (time[1] === "p.m." && hours < 12) {
    hours += 12;
  }
  if (time[1] === "a.m." && hours === 12) {
    hours -= 12;
  }
  hours = hoursToMinutes(hours, minutes);

  let nextBreak = EATING_BREAK.find((elem) => elem >= hours);
  let timeLeft = nextBreak - hours;

  const FINAL = [];
  FINAL.push(Math.floor(timeLeft / 60));
  FINAL.push(Math.floor(timeLeft % 60));
  console.log(FINAL);
}

timeToEat("2:00 p.m.");
timeToEat("5:50 p.m.");
timeToEat("12:00 a.m.");
