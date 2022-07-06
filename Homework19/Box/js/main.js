//  DOES NOT WORK

function makeBox(n) {
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; ++j) {
      if ((i == 1 && j == 1) || (i == n && j == n)) {
        console.log("*");
      } else {
        console.log(" ");
      }
    }
    console.log("\n");
  }
}

console.log(makeBox(3));
