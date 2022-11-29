// Afficher un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.

// $ node a7_pyramide.js O 5
//     O
//    OOO
//   OOOOO
//  OOOOOOO
// OOOOOOOOO

// $ node a6_fusion.js W 4
//    W
//   WWW
//  WWWWW
// WWWWWWW

let args = process.argv.slice(2);
let char = args[0];
let nbFloors = args[1];

function pyramid(char, nbFloors) {
  for (let i = 1; i <= nbFloors; i++) {
    let nbSpace = " ".repeat(nbFloors - i);
    let nbChar = char.repeat(i * 2 - 1);
    let finalResult = nbSpace + nbChar;
    console.log(finalResult);
  }
}

console.log(pyramid(char, nbFloors));
