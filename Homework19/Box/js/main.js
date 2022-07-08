//  DOES NOT WORK

function makeBox(n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n) {
        line += "#";
      } else {
        line += j === 1 || j === n ? "#" : " ";
      }
    }
    console.log(line);
    line = "";
  }
  return line;
}
console.log(makeBox(5));
console.log(makeBox(3));
console.log(makeBox(2));
console.log(makeBox(1));
