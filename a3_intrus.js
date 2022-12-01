// Créez un programme qui retourne la valeur qui n’a pas de paire.

// $ node a3_intrus.js carreau trefle trefle coeur carreau
// Intrus détecté: coeur

// $ node a3_intrus.js 1 2 3 4 5 4 3 2 1
// Intrus détecté: 5

// $ node a3_intrus.js 1 2 1 2
// Aucun intrus détecté

// function isSingle(arr) {
//   return arr.find((str) => arr.indexOf(str) === arr.lastIndexOf(str));
// }

// function isSingle(arr) {
//   return arr.some((str) => arr.indexOf(str) === arr.lastIndexOf(str));
// }

// function hasIntruder(arr) {
//   let intruder = arr.find((str) => arr.indexOf(str) === arr.lastIndexOf(str));
//   if (isSingle(arr)) {
//     return `Intrus détecté: ${intruder}`;
//   }
//   return "Aucun intrus détecté";
// }
// console.log(hasIntruder(args));

let args = process.argv.slice(2);

function getIntruder(arr) {
  let intruder = arr.find((str) => arr.indexOf(str) === arr.lastIndexOf(str));
  return intruder;
}

if (getIntruder(args) === undefined) {
  console.log("Aucun intrus détecté");
} else {
  console.log(`Intrus détecté: ${gerIntruder(args)}`);
}
