    //  RGB to Hex Color Converter.

function rgbToHex(string){
    string = string.slice(4,-1);
    string = string.split(",");

    let r = Number(string[0]),
    g = Number(string[1]),
    b = Number(string[2]);

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    (r.length == 1) ? (r = "0" + r) : r;
    (g.length == 1 ) ? (g = "0" + g) : g;
    (b.length == 1) ? (b = "0" + b) : b;

    console.log("#" + r + g + b);
  }

  rgbToHex("rgb(45, 255, 192)");
  rgbToHex("rgb(0, 0, 0)");
  rgbToHex("rgb(0, 128, 192)");

// //  ANOTHER SOLUTION WITHOUT STRING

// // CONVERTS THE NUMBER TO HEXADECIMAL
// function converter(num) {
//   let hex = num.toString(16);
//   return hex.length === 1 ? "0" + hex : hex;
// }

// // CONVERTS THE RGB TO HEX
// function rgbToHex(r, g, b) {
//   return "#" + converter(r) + converter(g) + converter(b);
// }

// console.log(rgbToHex(45, 255, 192));
// console.log(rgbToHex(0, 0, 0));
// console.log(rgbToHex(0, 128, 192));
