//      H4ck3r Sp34k

// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

function hackerSpeak(str){
    let final = str.replaceAll('a', '4');
    final = final.replaceAll('e', '3');
    final = final.replaceAll('i', '1');
    final = final.replaceAll('o', '0');
    final = final.replaceAll('s', '5');
    console.log(final);
}

//      TESTS

let testOne = "javascript is cool";
let testTwo = "programming is fun";
let testThree = "become a coder";

hackerSpeak(testOne);
hackerSpeak(testTwo);
hackerSpeak(testThree);
